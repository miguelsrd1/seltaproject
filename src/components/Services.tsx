import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Hammer, Leaf, FileText, Building, Wrench } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'New Builds',
    subtitle: 'From Scratch',
    description: 'Complete new construction projects. From land to luxury, we build your dream home from the ground up with full architectural freedom.',
    features: ['Custom Architecture', 'Site Selection', 'Full Project Management', 'Quality Guarantees']
  },
  {
    icon: Hammer,
    title: 'Renovations',
    subtitle: 'Complete Transformations',
    description: 'Breathe new life into existing structures. We specialize in modernizing traditional Portuguese properties while preserving their soul.',
    features: ['Structural Assessment', 'Modern Upgrades', 'Heritage Preservation', 'Interior Design']
  },
  {
    icon: Leaf,
    title: 'Sustainable Design',
    subtitle: 'Eco-Conscious',
    description: 'Green building practices, solar integration, and sustainable materials. Build with respect for Portugal\'s beautiful environment.',
    features: ['Solar Integration', 'Green Materials', 'Energy Efficiency', 'Water Management']
  },
  {
    icon: FileText,
    title: 'Permitting',
    subtitle: 'Bureaucracy Handled',
    description: 'Navigate Portuguese building regulations with ease. We manage all permits, licenses, and municipal requirements on your behalf.',
    features: ['License Applications', 'Municipal Liaison', 'Documentation', 'Compliance Checks']
  },
  {
    icon: Building,
    title: 'Land Concierge',
    subtitle: 'Bespoke Service',
    description: 'Access our elite network of realtors and land scouts. We find opportunities before they hit the market, securing your perfect plot.',
    features: ['Off-Market Access', 'Due Diligence', 'Price Negotiation', 'Legal Support']
  },
  {
    icon: Wrench,
    title: 'Project Management',
    subtitle: 'End-to-End',
    description: 'Dedicated oversight from design to handover. Weekly updates, milestone tracking, and a single point of contact throughout.',
    features: ['Weekly Reports', 'Budget Control', 'Contractor Coordination', 'Quality Assurance']
  }
];

const ServiceCard: React.FC<{ service: typeof services[0]; index: number }> = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="service-card relative aspect-square bg-gallery overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Default State */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between">
        <div>
          <Icon size={32} strokeWidth={1} className="mb-6" />
          <p className="text-xs font-light tracking-widest uppercase text-muted-foreground mb-2">
            {service.subtitle}
          </p>
          <h3 className="font-serif text-2xl lg:text-3xl">
            {service.title}
          </h3>
        </div>
        <div className="w-8 h-px bg-foreground" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-overlay opacity-30" />

      {/* Hover Overlay - Solid Black */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-foreground p-8 flex flex-col justify-between"
          >
            <div>
              <Icon size={32} strokeWidth={1} className="mb-6 text-background" />
              <p className="text-xs font-light tracking-widest uppercase text-background/60 mb-2">
                {service.subtitle}
              </p>
              <h3 className="font-serif text-2xl lg:text-3xl text-background mb-4">
                {service.title}
              </h3>
              <p className="text-background/80 text-sm font-light leading-relaxed">
                {service.description}
              </p>
            </div>
            <div className="space-y-2">
              {service.features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <div className="w-1 h-1 bg-background" />
                  <span className="text-xs text-background/80">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Border */}
      <div className="absolute inset-0 border border-border pointer-events-none" />
    </motion.div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs font-light tracking-widest uppercase text-muted-foreground mb-4">
            What We Do
          </p>
          <h2 className="font-serif text-4xl lg:text-6xl mb-6">
            Comprehensive Services
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            Every aspect of your project, managed with precision. 
            Whether building anew or transforming the existing, we have you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* New Build vs Renovation Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 lg:mt-32"
        >
          <div className="grid lg:grid-cols-2 gap-px bg-border">
            {/* New Build */}
            <div className="bg-background p-12 lg:p-16">
              <div className="flex items-center gap-4 mb-8">
                <Home size={40} strokeWidth={1} />
                <div>
                  <p className="text-xs font-light tracking-widest uppercase text-muted-foreground">
                    Path One
                  </p>
                  <h3 className="font-serif text-3xl">New Builds</h3>
                </div>
              </div>
              <p className="text-muted-foreground font-light mb-8 leading-relaxed">
                Start with a blank canvas. Select your land, design your dream, 
                and watch us build it from foundation to finish. Complete architectural 
                freedom with expert guidance at every step.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-foreground" />
                  <span className="text-sm">Land acquisition support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-foreground" />
                  <span className="text-sm">Custom architectural design</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-foreground" />
                  <span className="text-sm">Full construction management</span>
                </div>
              </div>
            </div>

            {/* Renovation */}
            <div className="bg-gallery p-12 lg:p-16">
              <div className="flex items-center gap-4 mb-8">
                <Hammer size={40} strokeWidth={1} />
                <div>
                  <p className="text-xs font-light tracking-widest uppercase text-muted-foreground">
                    Path Two
                  </p>
                  <h3 className="font-serif text-3xl">Renovations</h3>
                </div>
              </div>
              <p className="text-muted-foreground font-light mb-8 leading-relaxed">
                Transform existing properties into modern masterpieces. We specialize 
                in updating traditional Portuguese homes while respecting their heritage 
                and character.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-foreground" />
                  <span className="text-sm">Structural assessments</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-foreground" />
                  <span className="text-sm">Heritage preservation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-foreground" />
                  <span className="text-sm">Modern upgrades & systems</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
