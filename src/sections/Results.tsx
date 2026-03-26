import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { TiltCard } from '@/components/TiltCard';
import { TextScramble } from '@/components/TextScramble';
import { 
  Bot, 
  ShoppingCart, 
  ExternalLink, 
  Github,
  Layers, 
  Cpu, 
  Plug, 
  Monitor,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const projects = [
  {
    id: 'clinica-bot',
    icon: Bot,
    title: 'Clínica Estética Bot',
    subtitle: 'Bot Telegram com Agente de IA',
    description: 'Sistema inteligente de atendimento para Telegram com triagem estética por IA, diagnóstico por imagem, recomendação de procedimentos e agendamento automático.',
    stack: ['Python', 'python-telegram-bot', 'Arcee AI', 'Groq Vision', 'Groq Whisper', 'Pydantic'],
    features: [
      'Máquina de estados conversacional com 8 estágios',
      'Diagnóstico por imagem via Groq Vision',
      'Transcrição de áudio via Groq Whisper',
      'Agentes especialistas por categoria (rejuvenescimento, acne, capilar...)',
      'Sistema de memória com resumo automático',
      'Agendamento com sugestão de horários e lembretes D-1/D',
    ],
    github: 'https://github.com/CACAifemowsf/clinica-estetica-bot.git',
  },
  {
    id: 'sdr-automation',
    icon: Bot,
    title: 'SDR Automation (Kommo Qualifier)',
    subtitle: 'Automação de Qualificação de Leads no Instagram',
    description: 'Sistema que analisa o perfil (bio, foto, grid) de leads do Instagram através de IA visual (LLaVA/Groq) cruzando com um Perfil de Cliente Ideal (ICP), qualificando ou desqualificando leads automaticamente no Kommo CRM.',
    stack: ['Python', 'Playwright', 'Groq LLaVA', 'Kommo API', 'PyAutoGUI'],
    features: [
      'Análise de perfil visual do Instagram (foto de perfil e últimos posts)',
      'Identificação de ICP baseada em palavras-chave e visão computacional',
      'Integração avançada com Kommo CRM via OAuth2',
      'Processamento em lotes com relatórios Markdown automáticos',
      'Cache inteligente para não reprocessar leads',
    ],
    github: 'https://github.com/CACAifemowsf/sdr-automation.git',
  },
  {
    id: 'mercado-pdv',
    icon: ShoppingCart,
    title: 'Mercado PDV',
    subtitle: 'Sistema PDV + Estoque + Agente IA',
    description: 'Sistema completo de Ponto de Venda e gestão de estoque para mercados brasileiros, com agente de IA integrado que cadastra produtos via texto, foto de nota fiscal ou áudio.',
    stack: ['Next.js 14', 'Fastify 5', 'Prisma', 'PostgreSQL', 'Redis', 'Tesseract.js', 'Arcee AI', 'Tailwind CSS'],
    features: [
      'PDV com múltiplas formas de pagamento (Dinheiro, Cartão, PIX)',
      'Gestão de estoque com controle de lotes e validade',
      'Agente IA: cadastro via texto, OCR de nota fiscal ou áudio',
      'Multi-tenant com roles (Admin, Gerente, Caixa)',
      'Dashboard com Recharts (vendas, top produtos, faturamento)',
      'Emissão de NFC-e com QR Code',
    ],
    github: 'https://github.com/CACAifemowsf/Mercado-PDV',
  },
  {
    id: 'disparador-whatsapp',
    icon: Plug,
    title: 'Disparador WhatsApp',
    subtitle: 'Automação de Mensagens em Massa API Não Oficial',
    description: 'Sistema de envio de mensagens em lote integrado com a WhatsApp Cloud API (migrando para Baileys) construído para contornar restrições e custos oficiais.',
    stack: ['Node.js', 'Fastify', 'TypeScript', 'WhatsApp API'],
    features: [
      'Envio de mensagens em massa com delay configurável anti-ban',
      'Agendador de disparos',
      'Integração com webhook para respostas e status',
      'Gestão inteligente de filas de mensagens',
    ],
    github: 'https://github.com/CACAifemowsf/disparador-whatsapp.git',
  },
  {
    id: 'claude-pizza',
    icon: Layers,
    title: 'Claude & Oxente Pizza Bot',
    subtitle: 'Agente RAG e UI ChatGPT',
    description: 'Interface web baseada no Streamlit estilo ChatGPT conectada a APIs de LLM da Anthropic (Claude) e agentes locais, incluindo um bot especializado para pizzaria.',
    stack: ['Python', 'Streamlit', 'LangChain', 'Anthropic API'],
    features: [
      'Interface chat conversacional',
      'Integração Retrieval-Augmented Generation (RAG)',
      'Web-scraper embutido para coleta de dados de contexto',
      'Bot especialista no cardápio "Oxente Pizza"',
    ],
    github: 'https://github.com/CACAifemowsf/claude-pizza-bot.git',
  },
];

const highlights = [
  {
    icon: Layers,
    title: 'Arquitetura Multi-camada',
    description: 'Projetos estruturados com separação de responsabilidades: agentes, serviços, schemas e interfaces',
  },
  {
    icon: Cpu,
    title: 'Agentes de IA',
    description: 'Orquestradores, especialistas e subagentes com diagnóstico estruturado e respostas inteligentes',
  },
  {
    icon: Plug,
    title: 'APIs & Integrações',
    description: 'REST APIs, webhooks, integração com LLMs, serviços de áudio, visão computacional e OCR',
  },
  {
    icon: Monitor,
    title: 'Full Stack',
    description: 'Frontend React/Next.js + Backend Fastify/Python com banco de dados relacional e cache',
  },
];

export function Results() {
  const [expandedProject, setExpandedProject] = useState<string | null>(projects[0].id);

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[200px]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <RevealOnScroll className="text-center mb-16">
            <span className="inline-block text-white/40 text-sm tracking-wider mb-4">
              <TextScramble text="Portfolio" />
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white font-semibold mb-6 tracking-tight">
              Projetos <span className="text-white/50">Desenvolvidos</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Sistemas completos construídos do zero com agentes de IA, automação e arquitetura robusta
            </p>
          </RevealOnScroll>

          {/* Project Cards */}
          <div className="space-y-6 mb-16">
            {projects.map((project, index) => (
              <RevealOnScroll key={project.id} delay={index * 0.2} direction="scale">
                <TiltCard tiltAmount={2}>
                  <div className="relative p-8 bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-colors">
                    {/* Background glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
                    
                    <div className="relative z-10">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 flex-shrink-0">
                            <project.icon className="w-7 h-7 text-white/60" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-semibold text-white mb-1">{project.title}</h3>
                            <p className="text-white/40 text-sm">{project.subtitle}</p>
                          </div>
                        </div>

                        {/* GitHub Link */}
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/60 hover:text-white hover:border-white/20 transition-all"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4" />
                          <span className="text-sm">GitHub</span>
                          <ExternalLink className="w-3 h-3" />
                        </motion.a>
                      </div>

                      {/* Description */}
                      <p className="text-white/50 text-lg leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Stack Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.stack.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1.5 text-xs text-white/50 bg-white/5 border border-white/5 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Expand/Collapse Features */}
                      <motion.button
                        onClick={() => setExpandedProject(
                          expandedProject === project.id ? null : project.id
                        )}
                        className="flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors mb-4"
                      >
                        <span className="text-sm">
                          {expandedProject === project.id ? 'Ocultar detalhes' : 'Ver detalhes'}
                        </span>
                        {expandedProject === project.id ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </motion.button>

                      {/* Features List */}
                      <AnimatePresence>
                        {expandedProject === project.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="pt-4 border-t border-white/5 space-y-3">
                              {project.features.map((feature, fIndex) => (
                                <motion.div
                                  key={fIndex}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: fIndex * 0.05 }}
                                  className="flex items-start gap-3 group"
                                >
                                  <span className="w-1.5 h-1.5 bg-white/30 rounded-full mt-2 flex-shrink-0 group-hover:bg-white/60 transition-colors" />
                                  <span className="text-white/50 text-sm group-hover:text-white/70 transition-colors">
                                    {feature}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>

          {/* Highlights Grid */}
          <RevealOnScroll delay={0.3}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-white/10 hover:bg-white/[0.03] transition-all duration-300"
                >
                  <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                    <item.icon className="w-6 h-6 text-white/50 group-hover:text-white/70 transition-colors" />
                  </div>
                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
