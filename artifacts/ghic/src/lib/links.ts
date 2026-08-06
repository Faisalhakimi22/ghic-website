/**
 * External destinations, in one place so a moved URL is a one-line change.
 *
 * The distinction that matters here, because the buttons look similar but
 * do different things:
 *
 *   "Sign in"  -> /login. Firebase + GitHub OAuth. Identity only; grants
 *                 read:user and user:email and nothing else.
 *   "Install"  -> the GitHub App installation flow. This is what actually
 *                 puts GHIC on a repository, and it carries the Issues
 *                 read/write permission.
 *
 * They are separate consents on purpose, and wiring "Install" at the login
 * page would be wrong: signing in grants GHIC nothing over your code, and
 * a user who signs in but never installs has a working account and an
 * inert product. Install is the primary action on this site.
 */

/** GitHub App slug — verified live at github.com/apps/<slug>. */
export const GITHUB_APP_SLUG = 'ghic-github-issue-intelligence';

/**
 * Installation flow. GitHub redirects anonymous visitors to sign in first,
 * then to repository selection, so this works for logged-out users.
 */
export const GITHUB_APP_INSTALL_URL = `https://github.com/apps/${GITHUB_APP_SLUG}/installations/new`;

/** The App's public marketing page on GitHub. */
export const GITHUB_APP_URL = `https://github.com/apps/${GITHUB_APP_SLUG}`;

/** Source repository. */
export const GITHUB_REPO_URL = 'https://github.com/Faisalhakimi22/github-issue-classifier';

/** Support / sales contact. */
export const CONTACT_EMAIL = 'faisalh5556@gmail.com';
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;
