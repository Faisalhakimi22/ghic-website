import { motion } from 'framer-motion';
import {
  FolderGit2,
  LayoutDashboard,
  MessageSquareText,
  ShieldCheck,
  Tags,
  Webhook,
  type LucideIcon,
} from 'lucide-react';
import { SiGithub } from 'react-icons/si';

const GRAY = '#C9C9C9';

type GitHubCapability = {
  icon: LucideIcon | typeof SiGithub;
  name: string;
  desc: string;
  black: boolean;
};

const capabilities: GitHubCapability[] = [
  {
    icon: SiGithub,
    name: 'GitHub App',
    desc: 'Install GHIC through GitHub and choose the repositories it may access.',
    black: true,
  },
  {
    icon: Webhook,
    name: 'Signed Webhooks',
    desc: 'Issue events enter through signature-verified GitHub webhooks.',
    black: false,
  },
  {
    icon: ShieldCheck,
    name: 'Access Lifecycle',
    desc: 'Removed, suspended, revoked, or disconnected access stops processing.',
    black: false,
  },
  {
    icon: FolderGit2,
    name: 'Repository Context',
    desc: 'Semantic evidence is retrieved only from the authorized repository index.',
    black: true,
  },
  {
    icon: MessageSquareText,
    name: 'Issue Comments',
    desc: 'Grounded analysis can be returned to the issue after a final authorization check.',
    black: false,
  },
  {
    icon: Tags,
    name: 'Issue Labels',
    desc: 'Configured GHIC labels are applied only after authorization is rechecked.',
    black: false,
  },
  {
    icon: LayoutDashboard,
    name: 'GHIC Hub',
    desc: 'Connected repositories and persisted analyses appear in the workspace dashboard.',
    black: true,
  },
];

export function Integrations() {
  return (
    <section
      className="bg-white py-16 md:py-20"
      style={{
        borderTop: '3px solid #000',
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.35em] mb-3 flex items-center gap-3">
              <span className="inline-block w-8 h-[3px] bg-black" />
              GitHub Workflow
            </p>
            <h2
              className="text-[2rem] md:text-[3.5rem] leading-[0.95]"
              style={{ fontFamily: "'Archivo Black', sans-serif" }}
            >
              GITHUB,{' '}
              <span className="relative inline-block">
                <span
                  className="absolute -inset-x-1 inset-y-0.5 bg-black"
                  aria-hidden
                />
                <span className="relative text-white px-1">END TO END.</span>
              </span>
            </h2>
          </div>
          <p className="max-w-sm text-sm font-semibold text-black/60 leading-relaxed">
            One authorization model from installation to maintainer-facing result.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={capability.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="p-6 relative overflow-hidden card-t wobble"
                style={{
                  border: '3px solid #000',
                  boxShadow: capability.black
                    ? `8px 8px 0 ${GRAY}`
                    : '8px 8px 0 #000',
                  background: capability.black ? '#000' : '#fff',
                  color: capability.black ? '#fff' : '#000',
                }}
              >
                <Icon className="w-8 h-8 mb-4" />
                <p
                  className="font-bold uppercase tracking-wide text-sm mb-1"
                  style={{ fontFamily: "'Archivo Black', sans-serif" }}
                >
                  {capability.name}
                </p>
                <p
                  className="text-xs leading-relaxed"
                  style={{
                    color: capability.black
                      ? 'rgba(255,255,255,0.6)'
                      : 'rgba(0,0,0,0.55)',
                  }}
                >
                  {capability.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
