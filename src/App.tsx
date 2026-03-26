import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CustomCursor } from '@/components/CustomCursor';
import { ParticleBackground } from '@/components/ParticleBackground';
import { AnimatedGrid } from '@/components/AnimatedGrid';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Navbar } from '@/sections/Navbar';
import { Hero } from '@/sections/Hero';
import { Expertise } from '@/sections/Expertise';
import { Experience } from '@/sections/Experience';
import { Results } from '@/sections/Results';
import { Testimonials } from '@/sections/Testimonials';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-[100]">
        <div className="relative">
          {/* Loading animation */}
          <motion.div
            className="w-16 h-16 relative"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="200"
                strokeDashoffset="100"
              />
            </svg>
          </motion.div>
          
          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-lg font-semibold">CE</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Interactive Elements */}
      <CustomCursor />
      <ParticleBackground />
      <AnimatedGrid />
      <ScrollProgress />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <Expertise />
        <Experience />
        <Results />
        <Testimonials />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
