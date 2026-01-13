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
    location: 'Comporta, Portugal',
    type: 'completed',
    category: 'Completed',
    year: '2024',
    image: project1,
    description: 'Minimalist coastal retreat with panoramic views'
  },
  {
    id: 2,
    title: 'Villa Moderna',
    location: 'Sintra, Portugal',
    type: 'completed',
    category: 'Completed',
    year: '2023',
    image: project2,
    description: 'Contemporary family home with mountain backdrop'
  },
  {
    id: 3,
    title: 'Eco Residence',
    location: 'Algarve, Portugal',
    type: 'upcoming',
    category: 'Upcoming',
    year: '2025',
    image: project3,
    description: 'Net-zero sustainable retreat with green roof'
  },
  {
    id: 4,
    title: 'Contemporary Serra',
    location: 'Arrábida, Portugal',
    type: 'upcoming',
    category: 'Upcoming',
    year: '2025',
    image: project4,
    description: 'Bold concrete and wood structure in the hills'
  }
];

const filters = ['All', 'Completed', 'Upcoming'];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Completed') return project.type === 'completed';
    if (activeFilter === 'Upcoming') return project.type === 'upcoming';
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
              A curated selection of our finest new build projects across Portugal.
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

                  {/* Dark gradient scrim at bottom for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/30 to-transparent pointer-events-none" />

                  {/* Hover Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-foreground/60"
                  />

                  {/* Content - Always visible */}
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
                          {project.location} · {project.year}
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
