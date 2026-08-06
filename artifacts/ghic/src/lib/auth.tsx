/**
 * Auth state and the GitHub sign-in flow.
 *
 * Wraps the app once (see App.tsx) so any component can read the current
 * user without prop drilling, and so the Navbar can show a signed-in state
 * without every page knowing about Firebase.
 *
 * Three states matter and are kept distinct, because collapsing them is
 * what produces a UI that flashes "Sign in" at an already-signed-in user
 * on every page load:
 *
 *   `loading`   — we haven't heard back from Firebase yet. Render nothing
 *                 auth-dependent.
 *   `user`      — signed in.
 *   `null` user — definitively signed out.
 *
 * When Firebase isn't configured, `loading` resolves to false immediately
 * and `user` stays null, so the site behaves like a normal signed-out
 * marketing site rather than hanging on a spinner forever.
 */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  type User,
  onAuthStateChanged,
  signInWithPopup,
  signOut as firebaseSignOut,
} from 'firebase/auth';
import {
  DASHBOARD_URL,
  getFirebaseAuth,
  githubProvider,
  isFirebaseConfigured,
} from './firebase';

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  error: string | null;
  configured: boolean;
  signInWithGitHub: () => Promise<User | null>;
  signOut: () => Promise<void>;
  clearError: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

/**
 * Firebase error codes mapped to something a person can act on.
 *
 * The raw codes ("auth/popup-blocked") are useless to an end user, and the
 * default messages leak SDK internals into a marketing site. Each of these
 * says what happened and what to do about it.
 */
function friendlyError(code: string): string {
  switch (code) {
    case 'auth/popup-closed-by-user':
    case 'auth/cancelled-popup-request':
      return 'Sign-in was cancelled.';
    case 'auth/popup-blocked':
      return 'Your browser blocked the sign-in window. Allow pop-ups for this site and try again.';
    case 'auth/account-exists-with-different-credential':
      return 'An account already exists with this email using a different sign-in method.';
    case 'auth/network-request-failed':
      return 'Network error. Check your connection and try again.';
    case 'auth/unauthorized-domain':
      return 'This domain is not authorised in Firebase. Add it under Authentication → Settings → Authorized domains.';
    case 'auth/operation-not-allowed':
      return 'GitHub sign-in is not enabled in Firebase. Enable it under Authentication → Sign-in method.';
    default:
      return 'Sign-in failed. Please try again.';
  }
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(isFirebaseConfigured);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const auth = getFirebaseAuth();
    if (!auth) {
      setLoading(false);
      return;
    }
    // onAuthStateChanged also restores a session on reload, so a returning
    // user isn't asked to sign in again.
    return onAuthStateChanged(
      auth,
      nextUser => {
        setUser(nextUser);
        setLoading(false);
      },
      authError => {
        console.error('[GHIC] auth state error:', authError);
        setLoading(false);
      },
    );
  }, []);

  const signInWithGitHub = useCallback(async () => {
    const auth = getFirebaseAuth();
    if (!auth) {
      setError(
        'Authentication is not configured yet. Add your Firebase keys to enable sign-in.',
      );
      return null;
    }
    setError(null);
    try {
      const result = await signInWithPopup(auth, githubProvider());
      return result.user;
    } catch (caught: unknown) {
      const code =
        typeof caught === 'object' && caught !== null && 'code' in caught
          ? String((caught as { code: unknown }).code)
          : '';
      // A cancelled popup is a normal thing a person does, not an error
      // worth showing them.
      if (code !== 'auth/popup-closed-by-user' && code !== 'auth/cancelled-popup-request') {
        setError(friendlyError(code));
      }
      return null;
    }
  }, []);

  const signOut = useCallback(async () => {
    const auth = getFirebaseAuth();
    if (!auth) return;
    try {
      await firebaseSignOut(auth);
    } catch (caught) {
      console.error('[GHIC] sign-out failed:', caught);
    }
  }, []);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      loading,
      error,
      configured: isFirebaseConfigured,
      signInWithGitHub,
      signOut,
      clearError: () => setError(null),
    }),
    [user, loading, error, signInWithGitHub, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside <AuthProvider>');
  }
  return context;
}

/**
 * Send a signed-in user to the dashboard.
 *
 * A full page navigation, not a client-side route: the dashboard is a
 * separate deployment on its own origin, so there is nothing for the
 * router to hand off to.
 */
export function goToDashboard(): void {
  window.location.assign(DASHBOARD_URL);
}
