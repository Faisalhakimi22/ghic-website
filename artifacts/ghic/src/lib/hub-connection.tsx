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

const MESSAGE_TYPE = 'ghic:hub-connection';
const INITIAL_CHECK_TIMEOUT_MS = 5_000;

type HubConnectionStatus = 'checking' | 'connected' | 'disconnected';

type HubConnectionContextValue = {
  status: HubConnectionStatus;
  connected: boolean;
  authenticated: boolean;
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
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [status, setStatus] = useState<HubConnectionStatus>('checking');
  const [authenticated, setAuthenticated] = useState(false);
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
        event.source !== iframeRef.current?.contentWindow ||
        !isConnectionMessage(event.data)
      ) {
        return;
      }

      setAuthenticated(event.data.authenticated);
      setStatus(event.data.connected ? 'connected' : 'disconnected');
    };

    window.addEventListener('message', onMessage);
    const timeout = window.setTimeout(() => {
      setStatus((current) =>
        current === 'checking' ? 'disconnected' : current,
      );
    }, INITIAL_CHECK_TIMEOUT_MS);

    return () => {
      window.removeEventListener('message', onMessage);
      window.clearTimeout(timeout);
    };
  }, [hubOrigin]);

  const value = useMemo<HubConnectionContextValue>(
    () => ({
      status,
      connected: status === 'connected',
      authenticated,
    }),
    [authenticated, status],
  );

  return (
    <HubConnectionContext.Provider value={value}>
      {children}
      <iframe
        ref={iframeRef}
        src={bridgeUrl}
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
