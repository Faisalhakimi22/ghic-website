import { PageShell, Prose, Section } from '@/components/PageShell';

/**
 * /terms
 *
 * The billing section describes what is actually true today: there is no
 * payment processing in this product yet, so it does not pretend there is.
 * If paid plans go live, that section has to change before the first
 * charge — see the note in AUTOMATION-adjacent docs and the handover
 * summary.
 *
 * The liability language is conventional boilerplate, not tailored advice.
 * It is written for a sole operator, which is what "Faisal Hakimi" as the
 * contracting party means here.
 */
export default function Terms() {
  return (
    <PageShell
      eyebrow="Legal"
      title="TERMS OF SERVICE."
      intro="The agreement between you and GHIC."
    >
      <Prose>
        <div className="p-4 bg-[#FFF3CD]" style={{ border: '3px solid #000' }}>
          <p className="text-sm text-black/80 leading-relaxed">
            <strong>Not legal advice.</strong> These terms describe how the service actually
            behaves, but they are conventional boilerplate rather than advice tailored to your
            jurisdiction. Have them reviewed before relying on them commercially.
          </p>
        </div>

        <p className="text-xs uppercase tracking-widest text-black/45">
          Last updated: 6 August 2026 · Operated by Faisal Hakimi (
          <a href="https://hakimi.tech" className="underline hover:text-black">
            hakimi.tech
          </a>
          )
        </p>

        <Section heading="The service">
          <p>
            GHIC analyses GitHub issues and posts assistive triage suggestions. It is a
            decision support tool. It does not merge code, close issues, assign maintainers, or
            change your repository on its own.
          </p>
        </Section>

        <Section heading="Your account">
          <p>
            You sign in with GitHub and are responsible for activity under your account. You
            must have the right to install GHIC on the repositories you add it to.
          </p>
        </Section>

        <Section heading="Acceptable use">
          <p>
            Do not use GHIC to process content you have no right to process, attempt to extract
            the underlying models, or deliberately overload the service.
          </p>
        </Section>

        <Section heading="Predictions are assistive, not authoritative">
          <p>
            GHIC&apos;s classifications, priority and severity estimates, root-cause
            hypotheses, and suggestions are probabilistic and can be wrong. They are provided
            to help a maintainer decide faster, never to decide for them. You remain
            responsible for every triage, code, and release decision you make. GHIC is provided
            &quot;as is&quot;, without warranty of any kind.
          </p>
        </Section>

        <Section heading="Availability and changes">
          <p>
            We aim to keep GHIC available but do not guarantee uninterrupted service. We may
            change or discontinue features at any time, and will give reasonable notice of
            material changes.
          </p>
        </Section>

        <Section heading="Billing">
          <p>
            GHIC is currently free to use and no payment is collected. Plan tiers shown on the
            pricing page describe intended future packaging and are not yet available for
            purchase.
          </p>
          <p>
            If paid plans are introduced, billing terms, cancellation, and refund conditions
            will be published here and you will be given notice before any charge.
          </p>
        </Section>

        <Section heading="Limitation of liability">
          <p>
            To the maximum extent permitted by law, Faisal Hakimi is not liable for indirect,
            incidental, or consequential damages arising from your use of GHIC, including lost
            profits, lost data, or missed defects. Total liability for any claim is limited to
            the greater of the amount you paid for the service in the twelve months preceding
            the claim, or USD 100.
          </p>
        </Section>

        <Section heading="Termination">
          <p>
            You may stop using GHIC at any time by uninstalling the GitHub App. We may suspend
            accounts that breach these terms.
          </p>
        </Section>

        <Section heading="Contact">
          <p>
            Questions about these terms:{' '}
            <a href="mailto:faisalh5556@gmail.com" className="underline hover:text-black">
              faisalh5556@gmail.com
            </a>
            .
          </p>
        </Section>
      </Prose>
    </PageShell>
  );
}
