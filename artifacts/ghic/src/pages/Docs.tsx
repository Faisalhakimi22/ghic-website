import { ArrowRight, BookOpen, Github, Terminal, Webhook } from 'lucide-react';
import { PageShell } from '@/components/PageShell';
import { GITHUB_APP_INSTALL_URL, GITHUB_REPO_URL } from '@/lib/links';

const steps = [
  {
    icon: Github,
    title: 'Install the GitHub App',
    body: 'Install GHIC on the repositories you want triaged. It requests Issues (read & write) and Metadata (read) — nothing else, and never contents write access.',
  },
  {
    icon: Webhook,
    title: 'Open an issue',
    body: 'GHIC receives the webhook, scores the issue with a calibrated classifier, and posts its analysis as a comment. Nothing is labelled, closed, or assigned automatically.',
  },
  {
    icon: Terminal,
    title: 'Tune the threshold',
    body: 'Every repository has a different score distribution. Start from the global default and adjust per repository once you have seen a week of predictions.',
  },
];

/**
 * /docs — an orientation page, not a documentation site.
 *
 * The real reference lives in the repository (README, deployment guide,
 * model cards). Restating it here would create a second copy to keep in
 * sync, so this explains the shape of the product and links out.
 */
export default function Docs() {
  return (
    <PageShell
      eyebrow="Documentation"
      title="GET GHIC RUNNING."
      intro="Three steps to a triaged repository. Full reference documentation, model cards, and the deployment guide live in the repository."
    >
      <div className="max-w-5xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="bg-white p-6"
              style={{ border: '3px solid #000', boxShadow: '6px 6px 0 #C9C9C9' }}
            >
              <div
                className="w-11 h-11 flex items-center justify-center bg-black mb-5"
                style={{ border: '3px solid #000' }}
              >
                <step.icon className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-black/40 mb-2">
                Step {index + 1}
              </p>
              <h3
                className="text-lg mb-3"
                style={{ fontFamily: "'Archivo Black', sans-serif", letterSpacing: '-0.01em' }}
              >
                {step.title}
              </h3>
              <p className="text-sm text-black/70 leading-relaxed">{step.body}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-12 p-7 md:p-9 bg-black text-white"
          style={{ border: '3px solid #000', boxShadow: '8px 8px 0 #C9C9C9' }}
        >
          <div className="flex items-start gap-4">
            <BookOpen className="w-6 h-6 shrink-0 mt-1" strokeWidth={2.5} />
            <div>
              <h3
                className="text-xl mb-3"
                style={{ fontFamily: "'Archivo Black', sans-serif" }}
              >
                FULL REFERENCE
              </h3>
              <p className="text-sm text-white/75 leading-relaxed mb-6 max-w-2xl">
                Deployment guide, configuration reference, model cards documenting how each
                prediction was evaluated, and the decisions behind what GHIC deliberately
                does not ship.
              </p>
              <a
                href={GITHUB_REPO_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 bg-white text-black px-5 py-3 text-sm font-bold uppercase tracking-wider hover:bg-transparent hover:text-white transition-colors"
                style={{ border: '3px solid #fff', fontFamily: "'Archivo Black', sans-serif" }}
              >
                <Github className="w-4 h-4" strokeWidth={2.5} />
                Read the docs
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href={GITHUB_APP_INSTALL_URL}
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3.5 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors no-underline"
            style={{
              border: '3px solid #000',
              boxShadow: '4px 4px 0 #000',
              fontFamily: "'Archivo Black', sans-serif",
            }}
          >
            Install free <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </PageShell>
  );
}
