import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, MapPin } from 'lucide-react';
import heroImage from '@/assets/hero-house.jpg';
import MagneticButton from './MagneticButton';
import { Button } from './ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Parallax Background */}
      <motion.div style={{
        y,
        scale
      }} className="absolute inset-0">
        <div className="absolute inset-0 bg-primary/40 z-10" />
        <img src={heroImage} alt="Modern Portuguese Architecture" className="w-full h-full object-cover" />
      </motion.div>

      {/* Content */}
      <motion.div style={{
        opacity
      }} className="relative z-20 h-full flex flex-col justify-end pb-20 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Location Badge */}
          <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="flex items-center gap-2 text-primary-foreground/80 mb-6">
            <MapPin size={14} className="text-primary-foreground/60" />
            <span className="text-xs font-light tracking-widest uppercase">{t.hero.location}</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 initial={{
            opacity: 0,
            y: 40
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 1,
            delay: 0.4
          }} className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-primary-foreground max-w-5xl leading-[1.1] mb-8">
            {t.hero.heading}
            <br />
            <span className="text-4xl text-primary-foreground">{t.hero.subheading}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.6
          }} className="text-primary-foreground/80 text-lg max-w-xl mb-12 lg:text-base font-medium">
            {t.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.8
          }} className="flex flex-col sm:flex-row gap-4">
            <MagneticButton>
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">{t.hero.startJourney}</a>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button variant="minimal" size="xl" className="text-primary-foreground" asChild>
                <a href="#portfolio">{t.hero.viewPortfolio}</a>
              </Button>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          delay: 1.2
        }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div animate={{
            y: [0, 10, 0]
          }} transition={{
            duration: 2,
            repeat: Infinity
          }}>
            <ArrowDown className="text-primary-foreground/60" size={20} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
