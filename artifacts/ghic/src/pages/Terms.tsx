import { PageShell, Prose, Section } from '@/components/PageShell';

/**
 * /terms
 *
 * Same posture as the privacy page: a real starting draft that describes
 * how the service actually behaves, with [BRACKETS] where only the
 * operator can answer, and an explicit note that it needs review.
 *
 * The "no warranty on predictions" section is the one that matters most
 * and is written from how GHIC genuinely works — it is assistive, a
 * maintainer decides, and the product says so in every comment it posts.
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
            <strong>Draft — requires review before launch.</strong> Items in [brackets] must be
            completed, and this should be reviewed by someone qualified before you rely on it.
          </p>
        </div>

        <p className="text-xs uppercase tracking-widest text-black/45">
          Last updated: [DATE] · Operated by [LEGAL ENTITY]
        </p>

        <Section heading="The service">
          <p>
            GHIC analyses GitHub issues and posts assistive triage suggestions. It is a decision
            support tool. It does not merge code, close issues, or make changes to your
            repository on its own.
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
            GHIC&apos;s classifications, priority and severity estimates, root-cause hypotheses,
            and suggestions are probabilistic and can be wrong. They are provided to help a
            maintainer decide faster, never to decide for them. You remain responsible for every
            triage, code, and release decision you make. GHIC is provided &quot;as is&quot;,
            without warranty of any kind.
          </p>
        </Section>

        <Section heading="Availability and changes">
          <p>
            We aim to keep GHIC available but do not guarantee uninterrupted service. We may
            change or discontinue features, and will give reasonable notice of material changes
            to paid plans.
          </p>
        </Section>

        <Section heading="Billing">
          <p>
            Paid plans are billed [BILLING TERMS]. You can cancel at any time; cancellation
            takes effect at the end of the current billing period. [REFUND POLICY].
          </p>
        </Section>

        <Section heading="Limitation of liability">
          <p>
            To the maximum extent permitted by law, [LEGAL ENTITY] is not liable for indirect or
            consequential damages arising from your use of GHIC. [LIABILITY CAP].
          </p>
        </Section>

        <Section heading="Termination">
          <p>
            You may stop using GHIC at any time by uninstalling the GitHub App. We may suspend
            accounts that breach these terms.
          </p>
        </Section>

        <Section heading="Contact">
          <p>Questions about these terms: [CONTACT EMAIL].</p>
        </Section>
      </Prose>
    </PageShell>
  );
}
