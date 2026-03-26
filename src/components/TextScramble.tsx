import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  triggerOnView?: boolean;
}

const glitchChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export function TextScramble({ 
  text, 
  className = '', 
  delay = 0, 
  duration = 1500,
  triggerOnView = true 
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!triggerOnView) {
      setTimeout(() => scramble(), delay);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setTimeout(() => scramble(), delay);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, delay, triggerOnView]);

  const scramble = () => {
    const originalText = text;
    const length = originalText.length;
    let iteration = 0;
    const totalIterations = duration / 25;

    const interval = setInterval(() => {
      setDisplayText(
        originalText
          .split('')
          .map((char, idx) => {
            if (char === ' ') return ' ';
            if (idx < iteration) return originalText[idx];
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          })
          .join('')
      );

      iteration += length / totalIterations;

      if (iteration >= length) {
        clearInterval(interval);
        setDisplayText(originalText);
      }
    }, 25);
  };

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayText}
    </motion.span>
  );
}

// Glitch text effect on hover
interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchText, setGlitchText] = useState(text);

  const triggerGlitch = () => {
    setIsGlitching(true);
    let iterations = 0;
    const maxIterations = 8;

    const interval = setInterval(() => {
      setGlitchText(
        text
          .split('')
          .map((char) => {
            if (char === ' ') return ' ';
            if (Math.random() > 0.8) {
              return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            }
            return char;
          })
          .join('')
      );

      iterations++;
      if (iterations >= maxIterations) {
        clearInterval(interval);
        setGlitchText(text);
        setIsGlitching(false);
      }
    }, 40);
  };

  return (
    <span
      className={`relative inline-block ${className}`}
      onMouseEnter={triggerGlitch}
      data-text={text}
    >
      <span className={`relative z-10 ${isGlitching ? 'text-white/80' : ''}`}>
        {glitchText}
      </span>
    </span>
  );
}
