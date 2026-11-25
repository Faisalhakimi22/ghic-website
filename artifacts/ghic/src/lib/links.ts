/**
 * External destinations, in one place so a moved URL is a one-line change.
 *
 * Product installation always starts in the authenticated Hub. The Hub
 * creates the one-time callback intent that binds Firebase identity and
 * workspace membership before redirecting to GitHub. A bare GitHub App
 * installation URL cannot provide that binding and is therefore not exposed
 * as a product CTA.
 */

/** GitHub App slug — verified live at github.com/apps/<slug>. */
export const GITHUB_APP_SLUG = 'ghic-github-issue-intelligence';

/** The App's public marketing page on GitHub. */
export const GITHUB_APP_URL = `https://github.com/apps/${GITHUB_APP_SLUG}`;

/** Source repository. */
export const GITHUB_REPO_URL = 'https://github.com/Faisalhakimi22/github-issue-classifier';

/** Support / sales contact. */
export const CONTACT_EMAIL = 'faisalh5556@gmail.com';
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}`;

/**
 * A plan enquiry with the tier and price already in the subject and body.
 *
 * There is no checkout on this site, so a paid tier's button opens an
 * email. Prefilling it means the enquiry arrives saying which plan and
 * which advertised price the person clicked — otherwise every one of these
 * is a blank message you have to reply to just to find out what they want,
 * and the advertised price is exactly the thing to have in writing.
 */
export function planEnquiryMailto(plan: string, price: string, period = ''): string {
  // Nothing is on sale during the beta, so this is a waitlist request,
  // not an order: the wording must not read as agreeing to a price.
  const subject = `GHIC ${plan} plan waitlist`;
  const body = [
    `Hi,`,
    ``,
    `Please let me know when the GHIC ${plan} plan opens${
      price && price !== 'Custom' ? ` (listed at ${price}${period})` : ''
    }.`,
    ``,
    `GitHub org / user:`,
    `Repositories to cover:`,
    `Approximate issues per month:`,
    ``,
    `Thanks,`,
  ].join('\n');
  return `${CONTACT_MAILTO}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
