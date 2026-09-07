import { ArrowRight, BookOpen, Github, Terminal, Webhook } from 'lucide-react';
import { PageShell } from '@/components/PageShell';
import { GITHUB_REPO_URL } from '@/lib/links';
import { DASHBOARD_URL } from '@/lib/firebase';

const steps = [
  {
    icon: Github,
    title: 'Sign in and connect GitHub',
    body: 'Sign in to the Hub with Firebase, start the secure GitHub App flow, and select the repositories GHIC may process.',
  },
  {
    icon: Webhook,
    title: 'Open an issue',
    body: 'GHIC verifies the signed webhook and current repository access before classification, retrieval, reasoning, or any GitHub write.',
  },
  {
    icon: Terminal,
    title: 'Review the result',
    body: 'Use the Hub and GitHub comment to inspect classification, risk, repository evidence, missing information, and the recommended next step.',
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
            href={DASHBOARD_URL}
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3.5 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors no-underline"
            style={{
              border: '3px solid #000',
              boxShadow: '4px 4px 0 #000',
              fontFamily: "'Archivo Black', sans-serif",
            }}
          >
            Open the Hub <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </PageShell>
  );
}
