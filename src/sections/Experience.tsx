import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { TextScramble } from '@/components/TextScramble';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';

const experiences = [
  {
    id: 'ilimit-head',
    type: 'IA & Automação',
    role: 'Head de Pré-Vendas & Especialista em IA',
    company: 'ILimit Marketing',
    period: 'Jan 2025 - Atualmente',
    location: 'Remoto',
    highlights: [
      'Concepção e implementação de automações e agentes de IA utilizando N8n',
      'Otimização de fluxos de prospecção, comunicação e qualificação de leads',
      'Integração de sistemas via API e gerenciamento de dados em Supabase e PostgreSQL',
      'Criação de dashboards e relatórios com Excel e Google Planilhas',
      'Aumento de 50% na taxa de agendamento e qualificação de leads através de automações',
      'Resultados de +R$110K mensal de forma consistente',
    ],
  },
  {
    id: 'automation-freelancer',
    type: 'Automação',
    role: 'Projetos de Automação com N8n e IA',
    company: 'Freelancer',
    period: '2025 - Atualmente',
    location: 'Remoto',
    highlights: [
      'Desenvolvimento de fluxos complexos para otimização de processos de vendas e marketing',
      'Chatbots inteligentes para atendimento automatizado',
      'Sistemas de qualificação de leads baseados em IA',
      'Integração de múltiplas plataformas via APIs e webhooks',
      'Automação de prospecção em redes sociais com análise de perfil por IA',
    ],
  },
  {
    id: 'dev-ia',
    type: 'Desenvolvimento',
    role: 'Desenvolvimento de Sistemas com IA e Subagentes',
    company: 'Projetos Pessoais',
    period: '2025 - Atualmente',
    location: 'Brasília - DF',
    highlights: [
      'Bot Telegram com agente de IA para clínica de estética — triagem, diagnóstico e agendamento',
      'Sistema PDV completo com gestão de estoque e agente IA para cadastro automático',
      'Arquitetura de agentes multi-camada com orquestrador e especialistas',
      'Integração com Arcee AI, Groq Vision, Groq Whisper e Tesseract.js (OCR)',
      'Stack: Python, Next.js, Fastify, Prisma, PostgreSQL, Redis',
    ],
  },
  {
    id: 'social-seller',
    type: 'Vendas',
    role: 'Social Seller Sênior',
    company: 'Ports Capital',
    period: 'Out 2024 - Dez 2024',
    location: 'São Paulo - Faria Lima',
    highlights: [
      'Atuação em vendas de alto valor (High Ticket)',
      'Aplicação de técnicas de persuasão e negociação',
      'Gestão de CRM e pipeline de acompanhamento de clientes',
    ],
  },
];

export function Experience() {
  const [activeExp, setActiveExp] = useState(experiences[0].id);
  const activeExperience = experiences.find(exp => exp.id === activeExp) || experiences[0];

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[200px] -translate-y-1/2"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <RevealOnScroll className="text-center mb-20">
            <span className="inline-block text-white/40 text-sm tracking-wider mb-4">
              <TextScramble text="Trajetória" />
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white font-semibold mb-6 tracking-tight">
              Experiência <span className="text-white/50">Profissional</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Automação inteligente, agentes de IA e desenvolvimento de sistemas completos
            </p>
          </RevealOnScroll>

          {/* Experience Layout */}
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Sidebar - Company List */}
            <div className="lg:col-span-4 space-y-3">
              {experiences.map((exp, index) => (
                <RevealOnScroll key={exp.id} delay={index * 0.1} direction="left">
                  <motion.button
                    onClick={() => setActiveExp(exp.id)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                      activeExp === exp.id
                        ? 'bg-white/5 border-white/20'
                        : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.03]'
                    }`}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Type badge */}
                    <span className="inline-block px-2 py-1 text-xs text-white/50 bg-white/5 rounded-md mb-2">
                      {exp.type}
                    </span>

                    {/* Role */}
                    <h3 className={`text-base font-medium mb-1 ${
                      activeExp === exp.id ? 'text-white' : 'text-white/70'
                    }`}>
                      {exp.role}
                    </h3>

                    {/* Company */}
                    <p className="text-white/40 text-sm">{exp.company}</p>

                    {/* Active indicator */}
                    {activeExp === exp.id && (
                      <motion.div 
                        className="absolute right-4 top-1/2 -translate-y-1/2"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        <ChevronRight className="w-5 h-5 text-white/40" />
                      </motion.div>
                    )}
                  </motion.button>
                </RevealOnScroll>
              ))}
            </div>

            {/* Main Content - Details */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeExp}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="h-full p-8 bg-white/[0.02] border border-white/5 rounded-3xl"
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-8 pb-8 border-b border-white/5">
                    <div>
                      <motion.span 
                        className="inline-block px-3 py-1 text-sm text-white/50 bg-white/5 rounded-md mb-4"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {activeExperience.type}
                      </motion.span>
                      <h3 className="text-2xl font-semibold text-white mb-1">
                        {activeExperience.role}
                      </h3>
                      <p className="text-white/50">{activeExperience.company}</p>
                    </div>
                    
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-white/40 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{activeExperience.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/40">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{activeExperience.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-4">
                    <h4 className="text-white/40 text-sm tracking-wider mb-4">
                      Principais Conquistas
                    </h4>
                    {activeExperience.highlights.map((highlight, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3 group"
                      >
                        <span className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2 flex-shrink-0 group-hover:bg-white transition-colors" />
                        <span className="text-white/60 group-hover:text-white/80 transition-colors">
                          {highlight}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
