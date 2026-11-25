import { PageShell, Prose, Section } from '@/components/PageShell';

/**
 * /privacy
 *
 * Describes what GHIC actually does with data, based on how the service is
 * built: webhook payloads in, a comment out, predictions in a Postgres
 * ledger. Sub-processors are the real ones this deployment uses.
 *
 * Still deliberately makes no compliance claims — no "GDPR compliant", no
 * certifications. Those are assertions about an organisation's processes,
 * not about code, and nothing here can substantiate them.
 */
export default function Privacy() {
  return (
    <PageShell
      eyebrow="Legal"
      title="PRIVACY POLICY."
      intro="What GHIC collects, why, and how long it keeps it."
    >
      <Prose>
        <div className="p-4 bg-[#FFF3CD]" style={{ border: '3px solid #000' }}>
          <p className="text-sm text-black/80 leading-relaxed">
            <strong>Not legal advice.</strong> This describes how GHIC is built to handle
            data and is accurate to the implementation, but it has not been reviewed by a
            lawyer. Have it reviewed before relying on it commercially.
          </p>
        </div>

        <p className="text-xs uppercase tracking-widest text-black/45">
          Last updated: 26 November 2026 · Operated by Faisal Hakimi (
          <a href="https://hakimi.tech" className="underline hover:text-black">
            hakimi.tech
          </a>
          )
        </p>

        <Section heading="What we collect">
          <p>
            When you install the GHIC GitHub App on a repository, GitHub sends a webhook each
            time an issue is opened or edited. That payload contains the issue title, body,
            labels, author username, and repository name.
          </p>
          <p>
            When you sign in, we receive your GitHub username, profile picture, and email
            address through Firebase Authentication. We never receive your GitHub password,
            and sign-in does not request repository access.
          </p>
        </Section>

        <Section heading="What we do with it">
          <p>
            Issue text is used to produce a triage prediction and analysis, which is posted
            back to the issue as a comment. Where AI analysis is enabled, issue text is sent to
            our model provider for that purpose only.
          </p>
          <p>
            We keep a record of predictions — repository, issue number, score, and outcome — so
            the service can measure its own accuracy over time. We do not use your issue
            content to train models.
          </p>
        </Section>

        <Section heading="What we do not do">
          <p>
            We do not sell your data. We do not share it with anyone other than the
            sub-processors listed below. We do not read repository source code unless you
            explicitly enable repository analysis, and where enabled, credential-shaped files
            (<code className="font-mono text-[13px]">.env</code>, private keys, credentials
            files) are excluded from indexing and token-shaped values are redacted before
            anything is stored.
          </p>
        </Section>

        <Section heading="Sub-processors">
          <p>
            GHIC runs on infrastructure operated by third parties, each of which may process
            data on our behalf:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Vercel</strong> — application hosting and request logs
            </li>
            <li>
              <strong>Neon</strong> — Postgres database storing prediction records
            </li>
            <li>
              <strong>Google Firebase</strong> — authentication
            </li>
            <li>
              <strong>Groq</strong> and <strong>OpenRouter</strong> — AI analysis of the issue
              text and of the short source-code excerpts retrieved as evidence for it, where
              enabled. Repository indexes themselves are built on our own infrastructure and are
              not sent to any AI provider.
            </li>
            <li>
              <strong>Sentry</strong> — error reports (exception type, message and stack trace;
              never issue text, request bodies, headers or user identity)
            </li>
            <li>
              <strong>Upstash</strong> — background job queue
            </li>
            <li>
              <strong>GitHub</strong> — the source of the data, where results are posted, and
              GitHub Actions runners that build repository indexes
            </li>
          </ul>
        </Section>

        <Section heading="Retention">
          <p>
            Prediction records are retained for <strong>90 days</strong>, then deleted. Account
            records are retained while your account is active. Uninstalling the GitHub App
            stops all further processing immediately.
          </p>
        </Section>

        <Section heading="Your choices">
          <p>
            You can uninstall the GitHub App at any time from your repository or organisation
            settings, which ends processing at once. You can revoke the sign-in authorisation
            from your GitHub account&apos;s authorised OAuth apps. To request deletion of data
            we hold, email{' '}
            <a href="mailto:faisalh5556@gmail.com" className="underline hover:text-black">
              faisalh5556@gmail.com
            </a>
            .
          </p>
        </Section>

        <Section heading="Contact">
          <p>
            Questions about this policy:{' '}
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
