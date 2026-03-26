import { motion } from 'framer-motion';
import { RevealOnScroll } from '@/components/RevealOnScroll';
import { MagneticButton } from '@/components/MagneticButton';
import { TiltCard } from '@/components/TiltCard';
import { TextScramble } from '@/components/TextScramble';
import { Phone, Mail, MapPin, Linkedin, MessageCircle, ArrowUpRight, Github } from 'lucide-react';

const contactMethods = [
  {
    icon: Phone,
    label: 'Telefone',
    value: '+55 (61) 99638-3234',
    href: 'tel:+5561996383234',
    description: 'Disponível para chamadas e WhatsApp',
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'Carloseduardopereira2254@gmail.com',
    href: 'mailto:Carloseduardopereira2254@gmail.com',
    description: 'Resposta em até 24h',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Carlos Eduardo',
    href: 'https://www.linkedin.com/in/carlos-martins-3763b9163/',
    description: 'Conecte-se comigo',
    external: true,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'CACAifemowsf',
    href: 'https://github.com/CACAifemowsf',
    description: 'Veja meus projetos',
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-white/[0.02] rounded-full blur-[200px]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <RevealOnScroll className="text-center mb-16">
            <span className="inline-block text-white/40 text-sm tracking-wider mb-4">
              <TextScramble text="Contato" />
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white font-semibold mb-6 tracking-tight">
              Vamos <span className="text-white/50">conversar?</span>
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto">
              Disponível para projetos de automação, agentes de IA e desenvolvimento de sistemas
            </p>
          </RevealOnScroll>

          {/* Contact Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {contactMethods.map((method, index) => (
              <RevealOnScroll key={method.label} delay={index * 0.1} direction="up">
                <TiltCard>
                  <motion.a
                    href={method.href}
                    target={method.external ? '_blank' : undefined}
                    rel={method.external ? 'noopener noreferrer' : undefined}
                    className="group relative block p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-white/10 hover:bg-white/[0.03] transition-all duration-300 h-full"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Icon */}
                    <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                      <method.icon className="w-6 h-6 text-white/50 group-hover:text-white/70 transition-colors" />
                    </div>

                    {/* Content */}
                    <p className="text-white/40 text-sm mb-1">{method.label}</p>
                    <p className="text-lg font-medium text-white group-hover:text-white transition-colors mb-2 truncate" title={method.value}>
                      {method.value}
                    </p>
                    <p className="text-white/30 text-sm">{method.description}</p>

                    {/* Arrow */}
                    <motion.div 
                      className="absolute top-6 right-6 opacity-0 group-hover:opacity-100"
                      initial={{ x: -10 }}
                      whileHover={{ x: 0 }}
                    >
                      <ArrowUpRight className="w-5 h-5 text-white/40" />
                    </motion.div>
                  </motion.a>
                </TiltCard>
              </RevealOnScroll>
            ))}
          </div>

          {/* Location & CTA */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Location Card */}
            <RevealOnScroll direction="left">
              <div className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5">
                    <MapPin className="w-6 h-6 text-white/50" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Localização</h3>
                    <p className="text-white/40">Brasília - DF, Brasil</p>
                  </div>
                </div>
                <p className="text-white/50 leading-relaxed">
                  Baseado em Brasília com atuação remota em todo o Brasil. 
                  Experiência com projetos de automação e desenvolvimento 
                  para empresas de diferentes segmentos.
                </p>
              </div>
            </RevealOnScroll>

            {/* CTA Card */}
            <RevealOnScroll direction="right">
              <div className="relative p-8 bg-white/5 border border-white/10 rounded-3xl overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px]" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    Tem um projeto em mente?
                  </h3>
                  <p className="text-white/50 mb-6 leading-relaxed">
                    Se você precisa de automação, agentes de IA ou um sistema completo,  
                    posso ajudar a transformar sua ideia em realidade com tecnologia.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <MagneticButton 
                      href="https://wa.me/5561996383234"
                      variant="primary"
                      size="md"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp
                    </MagneticButton>
                    <MagneticButton 
                      href="https://www.linkedin.com/in/carlos-martins-3763b9163/"
                      variant="outline"
                      size="md"
                    >
                      <Linkedin className="w-5 h-5" />
                      LinkedIn
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
