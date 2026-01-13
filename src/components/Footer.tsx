import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, ArrowUpRight } from 'lucide-react';
import seltaLogo from '@/assets/selta-logo.png';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: 'Land Sourcing', href: '#journey' },
      { label: 'Design & Permitting', href: '#journey' },
      { label: 'Construction', href: '#journey' },
      { label: 'Project Handover', href: '#journey' },
    ],
    company: [
      { label: 'Our Journey', href: '#journey' },
      { label: 'Portfolio', href: '#portfolio' },
      { label: 'Contact', href: '#contact' },
    ]
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-20 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-4">
            <img 
              src={seltaLogo} 
              alt="SELTA Projects" 
              className="h-10 w-auto mb-8 logo-white"
            />
            <p className="text-background/70 font-light leading-relaxed mb-8 max-w-sm">
              End-to-end new build development in Portugal. From finding your perfect land 
              to handing you the keys, we make exceptional architecture accessible.
            </p>
            <div className="flex items-center gap-2 text-background/60">
              <MapPin size={14} />
              <span className="text-sm font-light">
                Portugal · Nationwide
              </span>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-xs font-light tracking-widest uppercase mb-6 text-background/50">
              Services
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-light tracking-widest uppercase mb-6 text-background/50">
              Company
            </h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-background/80 hover:text-background transition-colors font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-light tracking-widest uppercase mb-6 text-background/50">
              Get In Touch
            </h4>
            <a 
              href="mailto:info@seltaprojects.com"
              className="group flex items-center gap-2 text-background mb-6 hover:opacity-80 transition-opacity"
            >
              <Mail size={16} />
              <span className="font-light">info@seltaprojects.com</span>
              <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block border border-background/30 px-8 py-4 text-xs font-light tracking-widest uppercase hover:bg-background hover:text-foreground transition-all duration-300"
            >
              Start Your Project
            </motion.a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm font-light">
              © {currentYear} SELTA Projects. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <a href="#" className="text-background/50 hover:text-background text-sm font-light transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-background/50 hover:text-background text-sm font-light transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
