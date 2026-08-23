import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, Router as WouterRouter, useLocation } from 'wouter';
import { useEffect } from 'react';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import PricingPage from '@/pages/PricingPage';
import Docs from '@/pages/Docs';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import GitHubSetup from '@/pages/GitHubSetup';
import { AuthProvider } from '@/lib/auth';
import { HubConnectionProvider } from '@/lib/hub-connection';

const queryClient = new QueryClient();

/**
 * Restore the browser's default "new page starts at the top" behaviour.
 *
 * A client-side router keeps scroll position across navigations, so
 * clicking Pricing from halfway down the landing page lands you halfway
 * down Pricing. Anchor links (#pricing) are left alone — those are meant
 * to jump.
 */
function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        {/* Render props rather than `component={Login}`: wouter passes
            RouteComponentProps to `component`, which doesn't match Login's
            own `mode` prop. Same component either way — with OAuth there is
            no separate registration step, only different copy. */}
        <Route path="/login">{() => <Login mode="login" />}</Route>
        <Route path="/signup">{() => <Login mode="signup" />}</Route>
        <Route path="/pricing" component={PricingPage} />
        <Route path="/docs" component={Docs} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/github/setup" component={GitHubSetup} />
        <Route path="/setup" component={GitHubSetup} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  useEffect(() => {
    // Memphis design uses light mode — remove dark class if previously set
    document.documentElement.classList.remove('dark');
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <HubConnectionProvider>
          <TooltipProvider>
            <WouterRouter base={import.meta.env.BASE_URL?.replace(/\/$/, '') || ''}>
              <Router />
            </WouterRouter>
            <Toaster />
          </TooltipProvider>
        </HubConnectionProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
