import { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useInView } from 'framer-motion';
import { ArrowDown, Mail, Phone, MapPin } from 'lucide-react';
import { TextScramble } from '@/components/TextScramble';
import { MagneticButton } from '@/components/MagneticButton';

// Animated counter component
function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl lg:text-5xl font-semibold text-white">
      {count}{suffix}
    </span>
  );
}

// Floating element with mouse follow
function FloatingElement({ 
  children, 
  className = '', 
  intensity = 30 
}: { 
  children: React.ReactNode; 
  className?: string;
  intensity?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      x.set((e.clientX - centerX) / intensity);
      y.set((e.clientY - centerY) / intensity);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y, intensity]);

  return (
    <motion.div
      ref={ref}
      style={{ x: xSpring, y: ySpring }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient orbs - subtle */}
        <motion.div 
          className="absolute top-1/4 -left-32 w-96 h-96 bg-white/[0.02] rounded-full blur-[150px]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-white/[0.02] rounded-full blur-[150px]"
          animate={{ scale: [1.1, 1, 1.1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      {/* Content */}
      <div ref={containerRef} className="relative z-10 w-full px-6 lg:px-12 xl:px-20 pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text */}
            <div className="space-y-8">
              {/* Badge */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-full"
              >
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-white/70 text-sm">
                  <TextScramble text="Desenvolvedor & Automação com IA" delay={500} />
                </span>
              </motion.div>

              {/* Name */}
              <div className="space-y-1">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white font-semibold tracking-tight leading-none"
                >
                  Carlos
                </motion.h1>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white/60 font-semibold tracking-tight leading-none"
                >
                  Eduardo
                </motion.h1>
              </div>

              {/* Description */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-lg sm:text-xl text-white/50 max-w-xl leading-relaxed"
              >
                Especialista em{' '}
                <span className="text-white">Automação, Agentes de IA e Desenvolvimento</span>
                {' '}com experiência em otimização de processos, integrações via API e soluções No-code/Low-code.
              </motion.p>

              {/* Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap gap-10"
              >
                <div className="space-y-1">
                  <div className="text-white/40 text-sm">Projetos</div>
                  <div className="text-3xl font-semibold text-white">
                    <AnimatedCounter value={2} suffix="+" />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-white/40 text-sm">Automações</div>
                  <div className="text-3xl font-semibold text-white">
                    <AnimatedCounter value={10} suffix="+" />
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="text-white/40 text-sm">Agentes IA</div>
                  <AnimatedCounter value={5} suffix="+" />
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="flex flex-wrap gap-4"
              >
                <MagneticButton 
                  onClick={() => scrollToSection('#projects')}
                  variant="primary"
                  size="lg"
                >
                  <ArrowDown className="w-4 h-4" />
                  Ver Projetos
                </MagneticButton>
                <MagneticButton 
                  href="https://github.com/CACAifemowsf"
                  variant="outline"
                  size="lg"
                >
                  GitHub
                </MagneticButton>
              </motion.div>

              {/* Contact Info */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-wrap gap-6 pt-4"
              >
                {[
                  { icon: Phone, text: '+55 (61) 99638-3234', href: 'tel:+5561996383234' },
                  { icon: Mail, text: 'Carloseduardopereira2254@gmail.com', href: 'mailto:Carloseduardopereira2254@gmail.com' },
                  { icon: MapPin, text: 'Brasilia - DF', href: null },
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href || '#'}
                    className="flex items-center gap-2 text-white/40 hover:text-white transition-colors group"
                    whileHover={{ x: 3 }}
                  >
                    <item.icon className="w-4 h-4" />
                    <span className="text-sm">{item.text}</span>
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Visual */}
            <FloatingElement className="hidden lg:flex justify-center items-center" intensity={40}>
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {/* Main container */}
                <div className="relative w-80 h-80 xl:w-96 xl:h-96">
                  {/* Outer rotating ring */}
                  <motion.div 
                    className="absolute inset-0"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  >
                    <svg viewBox="0 0 400 400" className="w-full h-full">
                      <circle
                        cx="200"
                        cy="200"
                        r="190"
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="1"
                        strokeDasharray="4 8"
                      />
                    </svg>
                  </motion.div>

                  {/* Inner rotating ring */}
                  <motion.div 
                    className="absolute inset-8"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                  >
                    <svg viewBox="0 0 400 400" className="w-full h-full">
                      <circle
                        cx="200"
                        cy="200"
                        r="190"
                        fill="none"
                        stroke="rgba(255,255,255,0.05)"
                        strokeWidth="1"
                        strokeDasharray="8 16"
                      />
                    </svg>
                  </motion.div>

                  {/* Center content */}
                  <div className="absolute inset-16 flex items-center justify-center">
                    <div className="relative w-full h-full rounded-full border border-white/10 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-7xl xl:text-8xl font-semibold text-white tracking-tight">
                          CE
                        </span>
                        <motion.div 
                          className="mt-4 w-12 h-px bg-white/20 mx-auto"
                          animate={{ scaleX: [1, 1.5, 1] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        />
                        <p className="mt-4 text-white/40 text-xs tracking-[0.3em] uppercase">
                          Dev & IA
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Floating labels */}
                  <motion.div 
                    className="absolute -top-2 right-0 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <span className="text-white/60 text-xs tracking-wider">AGENTES IA</span>
                  </motion.div>
                  
                  <motion.div 
                    className="absolute -bottom-2 left-0 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                  >
                    <span className="text-white/60 text-xs tracking-wider">FULL STACK</span>
                  </motion.div>
                </div>
              </motion.div>
            </FloatingElement>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
