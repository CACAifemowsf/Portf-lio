import { motion } from 'framer-motion';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { TiltCard } from '@/components/TiltCard';
import { TextScramble } from '@/components/TextScramble';
import { 
  Workflow, 
  Bot, 
  Code2, 
  Globe, 
  Database, 
  Plug, 
  Blocks, 
  Wrench,
  Award,
  BookOpen
} from 'lucide-react';

const skills = [
  {
    icon: Workflow,
    title: 'Automação (N8n)',
    description: 'Fluxos complexos para otimização de processos de vendas, marketing e qualificação de leads',
  },
  {
    icon: Bot,
    title: 'Agentes de IA',
    description: 'Desenvolvimento de agentes inteligentes com OpenAI API, Arcee AI, CrewAI e LLMs',
  },
  {
    icon: Code2,
    title: 'Python',
    description: 'Scripts de automação, bots, integrações com APIs e desenvolvimento de backends',
  },
  {
    icon: Globe,
    title: 'JavaScript / TypeScript',
    description: 'Frontend com React/Next.js e backend com Node.js/Fastify',
  },
  {
    icon: Database,
    title: 'Bancos de Dados',
    description: 'PostgreSQL, Supabase, Redis e SQLite — modelagem e queries SQL intermediário',
  },
  {
    icon: Plug,
    title: 'APIs & Integrações',
    description: 'REST, JSON, Webhooks, HTTP Requests e integração entre sistemas',
  },
  {
    icon: Blocks,
    title: 'No-code / Low-code',
    description: 'N8n (avançado), Make e Zapier para automação de fluxos sem código',
  },
  {
    icon: Wrench,
    title: 'Ferramentas',
    description: 'Git, Docker, Vite, Turborepo, Excel, Google Planilhas e CRM',
  },
];

const certifications = [
  'Introdução à Lógica de Programação - Asimov Academy',
  'Por dentro das LLMs - Asimov Academy',
  'Agentes de IA - Auto Next / Erico',
  'Engenharia de Prompt e ChatGPT',
  'Social Selling - Full Sales System',
  'Closer Á.G.U.I.A - Full Sales System',
  'Hunter 10x - Full Sales System',
  'SDR/SETTERS - Full Sales System',
];

export function Expertise() {
  return (
    <section id="expertise" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-[150px]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <RevealOnScroll className="text-center mb-20">
            <span className="inline-block text-white/40 text-sm tracking-wider mb-4">
              <TextScramble text="Skills" />
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white font-semibold mb-6 tracking-tight">
              Skills & <span className="text-white/50">Tecnologias</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Especializado em automação com IA, desenvolvimento de agentes inteligentes e integração de sistemas
            </p>
          </RevealOnScroll>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
            {skills.map((skill, index) => (
              <RevealOnScroll key={skill.title} delay={index * 0.05} direction="scale">
                <TiltCard className="h-full">
                  <div className="group relative h-full p-6 bg-white/[0.02] border border-white/5 hover:border-white/20 rounded-2xl transition-all duration-500 hover:bg-white/[0.04]">
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                        <skill.icon className="w-6 h-6 text-white/70 group-hover:text-white transition-colors" />
                      </div>

                      {/* Title */}
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white transition-colors">
                        {skill.title}
                      </h3>

                      {/* Description */}
                      <p className="text-white/40 text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>

          {/* Certifications */}
          <RevealOnScroll delay={0.3}>
            <div className="relative p-8 bg-white/[0.02] border border-white/5 rounded-3xl">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5">
                  <Award className="w-6 h-6 text-white/70" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">Cursos & Certificações</h3>
                  <p className="text-white/40 text-sm">Formação contínua em tecnologia e IA</p>
                </div>
              </div>

              {/* Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 bg-white/[0.02] rounded-xl hover:bg-white/[0.04] transition-colors group"
                  >
                    <BookOpen className="w-4 h-4 text-white/40 flex-shrink-0 group-hover:text-white/60 transition-colors" />
                    <span className="text-white/60 text-sm">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
