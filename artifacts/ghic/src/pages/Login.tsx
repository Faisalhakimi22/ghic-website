import { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowRight, Github, Loader2, ShieldCheck, TriangleAlert, Zap } from 'lucide-react';
import { useAuth, goToDashboard } from '@/lib/auth';

/**
 * Sign in / sign up with GitHub.
 *
 * One component serves both routes. With OAuth there is no separate
 * registration step — GitHub decides whether this is a new account, and the
 * first sign-in creates it. Shipping a distinct "sign up" form would be a
 * lie about what happens when you press the button; the copy changes, the
 * flow doesn't.
 */
export default function Login({ mode = 'login' }: { mode?: 'login' | 'signup' }) {
  const { user, loading, error, configured, signInWithGitHub, clearError } = useAuth();
  const [, navigate] = useLocation();
  const [submitting, setSubmitting] = useState(false);

  const isSignup = mode === 'signup';

  // Someone who is already signed in has no business on this page.
  useEffect(() => {
    if (!loading && user) goToDashboard();
  }, [loading, user]);

  async function handleSignIn() {
    setSubmitting(true);
    const signedIn = await signInWithGitHub();
    setSubmitting(false);
    if (signedIn) goToDashboard();
  }

  const busy = submitting || loading;

  return (
    <div
      className="min-h-screen bg-white text-black flex flex-col"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {/* Minimal header: a sign-in page should have one job and no exits
          except back to the site. */}
      <header style={{ borderBottom: '3px solid #000' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-4">
          <Link href="/" className="inline-flex items-center gap-3 no-underline">
            <div
              className="w-10 h-10 flex items-center justify-center bg-black"
              style={{ border: '3px solid #000', boxShadow: '4px 4px 0 #C9C9C9' }}
            >
              <Zap className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: '20px',
                letterSpacing: '-0.02em',
                color: '#000',
              }}
            >
              GHIC
            </span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-5 py-14 md:py-20">
        <div className="w-full max-w-md">
          <div
            className="bg-white p-7 md:p-9"
            style={{ border: '3px solid #000', boxShadow: '8px 8px 0 #000' }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.35em] mb-4 flex items-center gap-3">
              <span className="inline-block w-8 h-[3px] bg-black" />
              {isSignup ? 'Get started' : 'Welcome back'}
            </p>

            <h1
              className="text-[1.9rem] md:text-[2.25rem] leading-[0.98] mb-3"
              style={{ fontFamily: "'Archivo Black', sans-serif", letterSpacing: '-0.02em' }}
            >
              {isSignup ? 'CREATE YOUR ACCOUNT.' : 'SIGN IN TO GHIC.'}
            </h1>

            <p className="text-sm text-black/60 mb-7 leading-relaxed">
              {isSignup
                ? 'GHIC uses your GitHub account. No password to choose, nothing extra to remember.'
                : 'Continue with the GitHub account you installed GHIC with.'}
            </p>

            {/* Config gap is stated plainly rather than shown as a broken
                button — this is the state the site ships in before Firebase
                keys are added. */}
            {!configured && (
              <div
                className="mb-6 p-4 bg-[#FFF3CD]"
                style={{ border: '3px solid #000' }}
                data-testid="auth-not-configured"
              >
                <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-2">
                  <TriangleAlert className="w-4 h-4" strokeWidth={2.5} />
                  Not configured yet
                </p>
                <p className="text-sm text-black/75 leading-relaxed">
                  Firebase credentials haven&apos;t been added to this deployment. Set the{' '}
                  <code className="font-mono text-[13px]">VITE_FIREBASE_*</code> variables to
                  enable GitHub sign-in.
                </p>
              </div>
            )}

            {error && (
              <div
                className="mb-6 p-4 bg-[#FFE0E0]"
                style={{ border: '3px solid #000' }}
                role="alert"
                data-testid="auth-error"
              >
                <p className="text-sm text-black/85 leading-relaxed">{error}</p>
                <button
                  onClick={clearError}
                  className="mt-2 text-xs font-bold uppercase tracking-widest underline"
                >
                  Dismiss
                </button>
              </div>
            )}

            <button
              onClick={handleSignIn}
              disabled={busy || !configured}
              data-testid="github-signin"
              className="w-full flex items-center justify-center gap-3 bg-black text-white px-5 py-4 text-sm font-bold uppercase tracking-wider transition-colors hover:bg-white hover:text-black disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-black disabled:hover:text-white"
              style={{
                border: '3px solid #000',
                boxShadow: '4px 4px 0 #000',
                fontFamily: "'Archivo Black', sans-serif",
              }}
            >
              {busy ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" strokeWidth={2.5} />
                  Connecting…
                </>
              ) : (
                <>
                  <Github className="w-5 h-5" strokeWidth={2.5} />
                  Continue with GitHub
                </>
              )}
            </button>

            <p className="mt-5 flex items-start gap-2 text-xs text-black/55 leading-relaxed">
              <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0" strokeWidth={2.5} />
              <span>
                GHIC requests your public profile and email only. Repository access is granted
                separately when you install the GitHub App, and can be revoked at any time.
              </span>
            </p>
          </div>

          <div className="mt-6 text-center text-sm text-black/60">
            {isSignup ? (
              <>
                Already using GHIC?{' '}
                <button
                  onClick={() => navigate('/login')}
                  className="font-bold underline hover:text-black"
                >
                  Sign in
                </button>
              </>
            ) : (
              <>
                New to GHIC?{' '}
                <button
                  onClick={() => navigate('/signup')}
                  className="font-bold underline hover:text-black"
                >
                  Create an account
                </button>
              </>
            )}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black/50 hover:text-black transition-colors"
            >
              Back to site <ArrowRight className="w-3.5 h-3.5" strokeWidth={2.5} />
            </Link>
          </div>

          <p className="mt-8 text-center text-[11px] text-black/45 leading-relaxed">
            By continuing you agree to our{' '}
            <Link href="/terms" className="underline hover:text-black">
              Terms
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="underline hover:text-black">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </main>
    </div>
  );
}
