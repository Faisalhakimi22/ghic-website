import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { DASHBOARD_URL } from './firebase';
import { useAuth } from './auth';

const MESSAGE_TYPE = 'ghic:hub-connection';
const REQUEST_TYPE = 'ghic:hub-connection-request';
const INITIAL_CHECK_TIMEOUT_MS = 5_000;

type HubConnectionStatus = 'checking' | 'connected' | 'disconnected';

type HubConnectionContextValue = {
  status: HubConnectionStatus;
  /** A GitHub App installation exists. */
  connected: boolean;
  /** The Hub's own origin reported a session. */
  authenticated: boolean;
  /**
   * There is a signed-in user, by either route.
   *
   * This is what a CTA should key on. `connected` means something narrower
   * -- that a GitHub App installation exists -- and a signed-in user who
   * has not installed the App yet is still someone for whom "Get Started"
   * is the wrong thing to offer.
   */
  signedIn: boolean;
  /** True while neither route has answered yet. Render nothing auth-shaped. */
  settling: boolean;
};

type HubConnectionMessage = {
  type: typeof MESSAGE_TYPE;
  version: 1;
  connected: boolean;
  authenticated: boolean;
};

const HubConnectionContext = createContext<HubConnectionContextValue | null>(null);

function isConnectionMessage(value: unknown): value is HubConnectionMessage {
  if (!value || typeof value !== 'object') return false;
  const message = value as Partial<HubConnectionMessage>;
  return (
    message.type === MESSAGE_TYPE &&
    message.version === 1 &&
    typeof message.connected === 'boolean' &&
    typeof message.authenticated === 'boolean'
  );
}

/**
 * Reads session state from the Hub's own origin. Firebase browser sessions
 * are origin-scoped, so the marketing site's local auth state cannot tell
 * whether the user has signed out of the Hub.
 */
export function HubConnectionProvider({ children }: { children: ReactNode }) {
  // The local session matters as much as the bridge's answer, and is more
  // reliable than it. Browsers partition storage for cross-site iframes, so
  // the Hub loaded inside this page may see an empty Firebase store and
  // report a signed-out user who is in fact signed in. A first-party
  // session read on this origin is not subject to that, so it is consulted
  // first and the bridge only ever adds to what it knows.
  const { user, loading: authLoading } = useAuth();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [status, setStatus] = useState<HubConnectionStatus>('checking');
  const [authenticated, setAuthenticated] = useState(false);
  const [bridgeSrc, setBridgeSrc] = useState<string | undefined>();
  const hubOrigin = useMemo(() => new URL(DASHBOARD_URL).origin, []);
  const bridgeUrl = useMemo(() => {
    const url = new URL('/marketing-session', DASHBOARD_URL);
    url.searchParams.set('origin', window.location.origin);
    return url.toString();
  }, []);

  useEffect(() => {
    const onMessage = (event: MessageEvent<unknown>) => {
      if (
        event.origin !== hubOrigin ||
        !isConnectionMessage(event.data)
      ) {
        return;
      }

      setAuthenticated(event.data.authenticated);
      setStatus(event.data.connected ? 'connected' : 'disconnected');
    };

    window.addEventListener('message', onMessage);
    setBridgeSrc(bridgeUrl);
    const timeout = window.setTimeout(() => {
      setStatus((current) =>
        current === 'checking' ? 'disconnected' : current,
      );
    }, INITIAL_CHECK_TIMEOUT_MS);

    return () => {
      window.removeEventListener('message', onMessage);
      window.clearTimeout(timeout);
    };
  }, [bridgeUrl, hubOrigin]);

  const value = useMemo<HubConnectionContextValue>(() => {
    const signedIn = Boolean(user) || authenticated;
    return {
      status,
      connected: status === 'connected',
      authenticated,
      signedIn,
      // A known signed-in user settles immediately. Only a locally
      // signed-out visitor has to wait for the bridge, and that wait is
      // bounded by INITIAL_CHECK_TIMEOUT_MS.
      settling: authLoading || (!signedIn && status === 'checking'),
    };
  }, [authLoading, authenticated, status, user]);

  return (
    <HubConnectionContext.Provider value={value}>
      {children}
      <iframe
        ref={iframeRef}
        src={bridgeSrc}
        onLoad={() => {
          iframeRef.current?.contentWindow?.postMessage(
            { type: REQUEST_TYPE, version: 1 },
            hubOrigin,
          );
        }}
        title="GHIC connection status"
        aria-hidden="true"
        tabIndex={-1}
        sandbox="allow-same-origin allow-scripts"
        className="fixed h-px w-px opacity-0 pointer-events-none"
        style={{ left: '-10000px', top: '-10000px' }}
      />
    </HubConnectionContext.Provider>
  );
}

export function useHubConnection(): HubConnectionContextValue {
  const context = useContext(HubConnectionContext);
  if (!context) {
    throw new Error('useHubConnection must be used inside <HubConnectionProvider>');
  }
  return context;
}
