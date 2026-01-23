import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import { useLanguage } from '@/contexts/LanguageContext';

const projectImages = [project1, project2, project3, project4];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const { t } = useLanguage();

  const filters = [
    { value: 'all', label: t.portfolio.filterAll },
    { value: 'completed', label: t.portfolio.filterCompleted },
    { value: 'upcoming', label: t.portfolio.filterUpcoming }
  ];

  const projects = t.portfolio.projects.map((project, index) => ({
    ...project,
    image: projectImages[index],
    type: index < 2 ? 'completed' : 'upcoming'
  }));

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    return project.type === activeFilter;
  });

  return (
    <section id="portfolio" className="bg-gallery py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16"
        >
          <div className="max-w-2xl mb-8 lg:mb-0">
            <p className="text-xs font-light tracking-widest uppercase text-muted-foreground mb-4">
              {t.portfolio.sectionLabel}
            </p>
            <h2 className="font-serif text-4xl lg:text-6xl mb-6">
              {t.portfolio.sectionTitle}
            </h2>
            <p className="text-muted-foreground text-lg font-light">
              {t.portfolio.sectionSubtitle}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {filters.map(filter => (
              <motion.button 
                key={filter.value} 
                onClick={() => setActiveFilter(filter.value)} 
                className={`px-6 py-3 text-xs font-light tracking-widest uppercase transition-all duration-300 border ${
                  activeFilter === filter.value 
                    ? 'bg-foreground text-background border-foreground' 
                    : 'bg-transparent text-foreground border-border hover:border-foreground'
                }`} 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
              >
                {filter.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <LayoutGroup>
          <motion.div layout className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map(project => (
                <motion.div 
                  key={project.id} 
                  layout 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, scale: 0.9 }} 
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }} 
                  className="group relative aspect-[4/3] overflow-hidden cursor-pointer" 
                  onMouseEnter={() => setHoveredProject(project.id)} 
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  {/* Image */}
                  <motion.img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover" 
                    animate={{ scale: hoveredProject === project.id ? 1.1 : 1 }} 
                    transition={{ duration: 0.6 }} 
                  />

                  {/* Dark gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent pointer-events-none" />

                  {/* Hover Overlay */}
                  <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }} 
                    transition={{ duration: 0.3 }} 
                    className="absolute inset-0 bg-foreground/60" 
                  />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs font-light tracking-widest uppercase mb-1 text-background/90">
                          {project.category}
                        </p>
                        <h3 className="font-serif text-2xl lg:text-3xl text-background">
                          {project.title}
                        </h3>
                      </div>
                      <motion.div 
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                          x: hoveredProject === project.id ? 0 : 10
                        }} 
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowUpRight className="text-background" size={24} />
                      </motion.div>
                    </div>

                    <div className="flex justify-between items-end">
                      <div>
                        <motion.p 
                          animate={{
                            opacity: hoveredProject === project.id ? 1 : 0.8,
                            y: hoveredProject === project.id ? 0 : 5
                          }} 
                          transition={{ duration: 0.3, delay: 0.1 }} 
                          className="text-background/90 text-sm font-light mb-2"
                        >
                          {project.description}
                        </motion.p>
                        <p className="text-background text-sm font-medium">
                          {project.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
};

export default Portfolio;
