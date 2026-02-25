import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import seltaLogo from '@/assets/selta-logo.png';
import MagneticButton from './MagneticButton';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.header.journey, href: '#journey' },
    { label: t.header.portfolio, href: '#portfolio' },
    { label: t.header.contact, href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-sm border-b border-border' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <a href="#" className="relative z-10">
              <img 
                src={seltaLogo} 
                alt="SELTA Projects" 
                className={`h-8 lg:h-10 w-auto transition-all duration-300 ${
                  isScrolled ? '' : 'invert'
                }`}
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-12">
              {navItems.map((item) => (
                <MagneticButton key={item.label}>
                  <a
                    href={item.href}
                    className={`story-link text-xs font-light tracking-widest uppercase transition-colors duration-300 ${
                      isScrolled ? 'text-foreground' : 'text-primary-foreground'
                    }`}
                  >
                    {item.label}
                  </a>
                </MagneticButton>
              ))}
              <LanguageSwitcher isScrolled={isScrolled} />
              <MagneticButton>
                <a
                  href="#contact"
                  className={`border px-6 py-3 text-xs font-light tracking-widest uppercase transition-all duration-300 ${
                    isScrolled 
                      ? 'border-foreground text-foreground hover:bg-foreground hover:text-background' 
                      : 'border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary'
                  }`}
                >
                  {t.header.startProject}
                </a>
              </MagneticButton>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              className={`lg:hidden relative z-10 p-2 transition-colors ${
                isScrolled ? 'text-foreground' : 'text-primary-foreground'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background lg:hidden"
          >
            <motion.nav
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-8"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-3xl text-foreground"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <LanguageSwitcher isScrolled={true} />
              </motion.div>
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 border border-foreground px-8 py-4 text-xs font-light tracking-widest uppercase"
              >
                {t.header.startProject}
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
