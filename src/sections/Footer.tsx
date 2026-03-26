import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone, Heart, Github } from 'lucide-react';

const navLinks = [
  { label: 'Início', href: '#hero' },
  { label: 'Skills', href: '#expertise' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contato', href: '#contact' },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/CACAifemowsf', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/carloseduardopereira2254', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:Carloseduardopereira2254@gmail.com', label: 'Email' },
  { icon: Phone, href: 'tel:+5561996383234', label: 'Telefone' },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-16 border-t border-white/5">
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/[0.02] rounded-full blur-[150px]"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 xl:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <motion.div 
                className="flex items-center gap-3 mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative w-10 h-10">
                  <div className="w-full h-full rounded-full border border-white/20 flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">CE</span>
                  </div>
                </div>
                <div>
                  <span className="text-white text-lg font-medium">Carlos Eduardo</span>
                  <p className="text-white/40 text-sm">Desenvolvedor & Especialista em IA</p>
                </div>
              </motion.div>
              <p className="text-white/40 max-w-md leading-relaxed mb-6">
                Especialista em Automação, Agentes de IA e Desenvolvimento de sistemas. 
                Transformando processos com tecnologia e inteligência artificial.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target={['GitHub', 'LinkedIn'].includes(social.label) ? '_blank' : undefined}
                    rel={['GitHub', 'LinkedIn'].includes(social.label) ? 'noopener noreferrer' : undefined}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/40 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-white font-medium mb-6">Navegação</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <motion.a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-white/40 hover:text-white transition-colors"
                      whileHover={{ x: 3 }}
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-medium mb-6">Contato</h4>
              <ul className="space-y-4">
                <li>
                  <motion.a
                    href="tel:+5561996383234"
                    className="flex items-center gap-3 text-white/40 hover:text-white transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">+55 (61) 99638-3234</span>
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="mailto:Carloseduardopereira2254@gmail.com"
                    className="flex items-center gap-3 text-white/40 hover:text-white transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-sm break-all">Carloseduardopereira2254@gmail.com</span>
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="https://github.com/CACAifemowsf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/40 hover:text-white transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">GitHub</span>
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="https://www.linkedin.com/in/carloseduardopereira2254"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/40 hover:text-white transition-colors"
                    whileHover={{ x: 3 }}
                  >
                    <Linkedin className="w-4 h-4" />
                    <span className="text-sm">LinkedIn</span>
                  </motion.a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-white/30 text-sm text-center sm:text-left">
                © {new Date().getFullYear()} Carlos Eduardo. Todos os direitos reservados.
              </p>
              <motion.p 
                className="flex items-center gap-2 text-white/30 text-sm"
                whileHover={{ scale: 1.02 }}
              >
                Feito com <Heart className="w-4 h-4 text-white/50" /> em Brasília
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
