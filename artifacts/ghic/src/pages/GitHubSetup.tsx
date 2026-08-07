import { useEffect } from 'react';
import { Loader2 } from 'lucide-react';
import { DASHBOARD_URL } from '@/lib/firebase';

function dashboardSetupUrl(): string {
  const destination = new URL(DASHBOARD_URL);
  const source = new URL(window.location.href);

  source.searchParams.forEach((value, key) => {
    destination.searchParams.set(key, value);
  });

  destination.searchParams.set('source', 'github_app_setup');
  return destination.toString();
}

/**
 * GitHub App post-install bridge.
 *
 * GitHub redirects to the App's configured Setup URL with query parameters
 * such as `installation_id` and `setup_action`. The dashboard is a separate
 * deployment, so this route does a full-page handoff and keeps those
 * parameters available to the hub.
 */
export default function GitHubSetup() {
  useEffect(() => {
    window.location.replace(dashboardSetupUrl());
  }, []);

  return (
    <main className="min-h-screen bg-white text-black flex items-center justify-center px-5">
      <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest">
        <Loader2 className="w-5 h-5 animate-spin" strokeWidth={2.5} />
        Opening GHIC hub
      </div>
    </main>
  );
}
