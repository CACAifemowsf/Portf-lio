import { useState } from 'react';
import { motion } from 'framer-motion';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { TextScramble } from '@/components/TextScramble';
import { TiltCard } from '@/components/TiltCard';
import { GraduationCap } from 'lucide-react';

const categories = [
  {
    name: 'Linguagens',
    techs: [
      { name: 'Python', level: 'Básico' },
      { name: 'JavaScript', level: 'Básico' },
      { name: 'TypeScript', level: 'Básico' },
      { name: 'SQL', level: 'Intermediário' },
    ],
  },
  {
    name: 'IA & Automação',
    techs: [
      { name: 'N8n', level: 'Avançado' },
      { name: 'Make', level: 'Intermediário' },
      { name: 'Zapier', level: 'Intermediário' },
      { name: 'OpenAI API', level: 'Intermediário' },
      { name: 'Arcee AI', level: 'Intermediário' },
      { name: 'Groq API', level: 'Intermediário' },
      { name: 'CrewAI', level: 'Conceitos' },
    ],
  },
  {
    name: 'Frontend',
    techs: [
      { name: 'React', level: 'Básico' },
      { name: 'Next.js 14', level: 'Básico' },
      { name: 'Tailwind CSS', level: 'Básico' },
      { name: 'Radix UI', level: 'Básico' },
      { name: 'Recharts', level: 'Básico' },
    ],
  },
  {
    name: 'Backend',
    techs: [
      { name: 'Fastify', level: 'Básico' },
      { name: 'Node.js', level: 'Básico' },
      { name: 'Prisma ORM', level: 'Básico' },
      { name: 'REST APIs', level: 'Intermediário' },
      { name: 'Webhooks', level: 'Intermediário' },
    ],
  },
  {
    name: 'Bancos de Dados',
    techs: [
      { name: 'PostgreSQL', level: 'Intermediário' },
      { name: 'Supabase', level: 'Intermediário' },
      { name: 'Redis', level: 'Básico' },
      { name: 'SQLite', level: 'Básico' },
    ],
  },
  {
    name: 'Ferramentas',
    techs: [
      { name: 'Git', level: 'Básico' },
      { name: 'Docker', level: 'Básico' },
      { name: 'Vite', level: 'Básico' },
      { name: 'Turborepo', level: 'Básico' },
      { name: 'Webflow', level: 'Conceitos' },
      { name: 'Bubble', level: 'Conceitos' },
    ],
  },
];

const levelColors: Record<string, string> = {
  'Avançado': 'bg-white/20 text-white/80',
  'Intermediário': 'bg-white/10 text-white/60',
  'Básico': 'bg-white/5 text-white/40',
  'Conceitos': 'bg-white/[0.03] text-white/30',
};

export function Testimonials() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="stack" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-white/[0.02] rounded-full blur-[150px]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <RevealOnScroll className="text-center mb-16">
            <span className="inline-block text-white/40 text-sm tracking-wider mb-4">
              <TextScramble text="Tech Stack" />
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white font-semibold mb-6 tracking-tight">
              Tecnologias & <span className="text-white/50">Ferramentas</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              As tecnologias e plataformas que utilizo no dia a dia para construir soluções inteligentes
            </p>
          </RevealOnScroll>

          {/* Category Tabs */}
          <RevealOnScroll delay={0.1}>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat, index) => (
                <motion.button
                  key={cat.name}
                  onClick={() => setActiveCategory(index)}
                  className={`px-4 py-2 text-sm rounded-full border transition-all duration-300 ${
                    activeCategory === index
                      ? 'bg-white/10 border-white/20 text-white'
                      : 'bg-white/[0.02] border-white/5 text-white/40 hover:text-white/60 hover:border-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {cat.name}
                </motion.button>
              ))}
            </div>
          </RevealOnScroll>

          {/* Tech Grid */}
          <RevealOnScroll delay={0.2}>
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-16"
            >
              {categories[activeCategory].techs.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="group flex items-center justify-between p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <span className="text-white/70 font-medium group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                  <span className={`px-2.5 py-0.5 text-xs rounded-full ${levelColors[tech.level]}`}>
                    {tech.level}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </RevealOnScroll>

          {/* Education */}
          <RevealOnScroll delay={0.3}>
            <TiltCard tiltAmount={2}>
              <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5">
                    <GraduationCap className="w-6 h-6 text-white/70" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Formação Acadêmica</h3>
                    <p className="text-white/40 text-sm">Educação formal</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-4 bg-white/[0.02] rounded-xl">
                  <div>
                    <h4 className="text-white font-medium">Graduação em Segurança Pública</h4>
                    <p className="text-white/40 text-sm">Gran Faculdade</p>
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400/80 text-sm rounded-full border border-emerald-500/20 inline-block w-fit">
                    Cursando
                  </span>
                </div>
              </div>
            </TiltCard>
          </RevealOnScroll>

          {/* Methodology */}
          <RevealOnScroll delay={0.4}>
            <div className="mt-8 text-center">
              <div className="inline-flex flex-wrap justify-center gap-3">
                {['Agile', 'Scrum', 'Proativo', 'Organizado', 'Orientado a Resultados'].map((item) => (
                  <span 
                    key={item} 
                    className="px-4 py-2 text-sm text-white/40 bg-white/[0.02] border border-white/5 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
