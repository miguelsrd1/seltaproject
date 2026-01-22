import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface LanguageSwitcherProps {
  isScrolled: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ isScrolled }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`flex items-center gap-1 text-xs font-light tracking-widest transition-colors duration-300 ${
      isScrolled ? 'text-foreground' : 'text-primary-foreground'
    }`}>
      <button
        onClick={() => setLanguage('pt')}
        className={`px-2 py-1 transition-all duration-200 ${
          language === 'pt' 
            ? 'font-medium opacity-100' 
            : 'opacity-60 hover:opacity-100'
        }`}
      >
        PT
      </button>
      <span className="opacity-40">|</span>
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 transition-all duration-200 ${
          language === 'en' 
            ? 'font-medium opacity-100' 
            : 'opacity-60 hover:opacity-100'
        }`}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
