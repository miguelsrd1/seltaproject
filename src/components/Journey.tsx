import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { MapPin, PenTool, Hammer, Key } from 'lucide-react';
import sourcingImage from '@/assets/journey-sourcing.jpg';
import designImage from '@/assets/journey-design.jpg';
import constructionImage from '@/assets/journey-construction.jpg';
import handoverImage from '@/assets/journey-handover.jpg';

const journeyPhases = [
  {
    number: '01',
    title: 'Land Sourcing',
    subtitle: 'The Foundation',
    description: "We don't just find land; we find the potential. Leveraging our elite realtor network across Portugal to secure the perfect foundation for your new build.",
    icon: MapPin,
    image: sourcingImage,
    details: ['Market Analysis', 'Site Evaluation', 'Legal Due Diligence', 'Negotiation Support']
  },
  {
    number: '02',
    title: 'Design & Permitting',
    subtitle: 'The Blueprint',
    description: 'Our architectural partners craft bespoke designs for your ground-up build, honoring Portuguese traditions. We handle all permits and bureaucracy.',
    icon: PenTool,
    image: designImage,
    details: ['Concept Development', 'Architectural Plans', 'Municipal Permits', '3D Visualization']
  },
  {
    number: '03',
    title: 'Vetted Construction',
    subtitle: 'The Craft',
    description: 'Only pre-qualified, rigorously vetted contractors touch your new build. We manage every phase with weekly updates and transparent milestone tracking.',
    icon: Hammer,
    image: constructionImage,
    details: ['Contractor Selection', 'Quality Control', 'Timeline Management', 'Budget Oversight']
  },
  {
    number: '04',
    title: 'Handover',
    subtitle: 'Your Keys',
    description: 'Final inspections complete, snag list resolved, documentation delivered. We hand you the keys to a home built exactly as promised.',
    icon: Key,
    image: handoverImage,
    details: ['Final Inspection', 'Documentation', 'Warranty Transfer', 'Welcome Home']
  }
];

const JourneyPhase: React.FC<{ phase: typeof journeyPhases[0]; index: number }> = ({ phase, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });
  const Icon = phase.icon;

  return (
    <motion.div
      ref={ref}
      className="relative py-20 lg:py-32"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-24 items-center ${
          index % 2 === 1 ? 'lg:flex-row-reverse' : ''
        }`}>
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0.3, x: index % 2 === 0 ? -20 : 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="text-6xl lg:text-8xl font-serif text-border">{phase.number}</span>
              <motion.div
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0.5 }}
                className="w-14 h-14 border border-foreground flex items-center justify-center"
              >
                <Icon size={24} strokeWidth={1} />
              </motion.div>
            </div>
            
            <p className="text-xs font-light tracking-widest uppercase text-muted-foreground mb-2">
              {phase.subtitle}
            </p>
            
            <h3 className="font-serif text-3xl lg:text-5xl mb-6">
              {phase.title}
            </h3>
            
            <p className="text-muted-foreground text-lg font-light leading-relaxed mb-8 max-w-lg">
              {phase.description}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {phase.details.map((detail, i) => (
                <motion.div
                  key={detail}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-1 h-1 bg-foreground" />
                  <span className="text-sm font-light">{detail}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual Side - Now with real images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0.3, scale: 0.98 }}
            transition={{ duration: 0.8 }}
            className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
          >
            <div className="relative aspect-square overflow-hidden">
              <motion.img
                src={phase.image}
                alt={phase.title}
                className="w-full h-full object-cover"
                animate={isInView ? { scale: 1 } : { scale: 1.05 }}
                transition={{ duration: 0.8 }}
              />
              {/* Subtle overlay for consistency */}
              <div className="absolute inset-0 bg-foreground/5" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const Journey: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="journey" ref={containerRef} className="relative bg-background py-20">
      {/* Section Header */}
      <div className="container mx-auto px-6 lg:px-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <p className="text-xs font-light tracking-widest uppercase text-muted-foreground mb-4">
            The Process
          </p>
          <h2 className="font-serif text-4xl lg:text-6xl mb-6">
            Your Journey With Us
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            From the first conversation to the moment you unlock your front door, 
            we're with you at every milestone of your new build.
          </p>
        </motion.div>
      </div>

      {/* Timeline Line - Center - Starting below the header */}
      <div className="absolute left-1/2 top-[350px] bottom-0 w-px -translate-x-1/2 hidden lg:block">
        <div className="w-full h-full bg-border" />
        <motion.div
          style={{ height: lineHeight }}
          className="absolute top-0 left-0 w-full bg-foreground origin-top"
        />
      </div>

      {/* Phases */}
      <div className="relative">
        {journeyPhases.map((phase, index) => (
          <JourneyPhase key={phase.number} phase={phase} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Journey;
