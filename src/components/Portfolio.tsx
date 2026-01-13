import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';

const projects = [
  {
    id: 1,
    title: 'Casa Alentejo',
    location: 'Comporta',
    type: 'new-build',
    category: 'New Build',
    year: '2024',
    image: project1,
    description: 'Minimalist coastal retreat with panoramic views'
  },
  {
    id: 2,
    title: 'Villa Renovação',
    location: 'Cascais',
    type: 'renovation',
    category: 'Renovation',
    year: '2023',
    image: project2,
    description: 'Historic villa transformed into modern family home'
  },
  {
    id: 3,
    title: 'Eco Residence',
    location: 'Fundão',
    type: 'sustainable',
    category: 'Sustainable',
    year: '2024',
    image: project3,
    description: 'Net-zero mountain retreat with green roof'
  },
  {
    id: 4,
    title: 'Contemporary Serra',
    location: 'Sintra',
    type: 'new-build',
    category: 'New Build',
    year: '2023',
    image: project4,
    description: 'Bold concrete and wood structure in the hills'
  }
];

const filters = ['All', 'New Builds', 'Renovations', 'Sustainable'];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'New Builds') return project.type === 'new-build';
    if (activeFilter === 'Renovations') return project.type === 'renovation';
    if (activeFilter === 'Sustainable') return project.type === 'sustainable';
    return true;
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
              Our Work
            </p>
            <h2 className="font-serif text-4xl lg:text-6xl mb-6">
              Future Visions
            </h2>
            <p className="text-muted-foreground text-lg font-light">
              A curated selection of our finest projects across Portugal.
              Each one a testament to exceptional design and craftsmanship.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 text-xs font-light tracking-widest uppercase transition-all duration-300 border ${
                  activeFilter === filter
                    ? 'bg-foreground text-background border-foreground'
                    : 'bg-transparent text-foreground border-border hover:border-foreground'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <LayoutGroup>
          <motion.div 
            layout
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
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
                    animate={{
                      scale: hoveredProject === project.id ? 1.1 : 1
                    }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-foreground/80"
                  />

                  {/* Content - Always visible */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <motion.p
                          animate={{
                            color: hoveredProject === project.id ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 100%)'
                          }}
                          className="text-xs font-light tracking-widest uppercase mb-1 text-primary-foreground/80"
                        >
                          {project.category}
                        </motion.p>
                        <motion.h3
                          animate={{
                            color: hoveredProject === project.id ? 'hsl(0, 0%, 100%)' : 'hsl(0, 0%, 100%)'
                          }}
                          className="font-serif text-2xl lg:text-3xl text-primary-foreground"
                        >
                          {project.title}
                        </motion.h3>
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
                      <motion.div
                        animate={{
                          opacity: hoveredProject === project.id ? 1 : 0,
                          y: hoveredProject === project.id ? 0 : 10
                        }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <p className="text-background/80 text-sm font-light mb-2">
                          {project.description}
                        </p>
                        <p className="text-background text-sm">
                          {project.location} · {project.year}
                        </p>
                      </motion.div>
                    </div>
                  </div>

                  {/* Gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent pointer-events-none" />
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
