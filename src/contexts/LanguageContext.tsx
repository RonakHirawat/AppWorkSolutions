
import React, { createContext, useContext, ReactNode } from 'react';
import { en } from '../locales/en';

type Translations = typeof en;

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const language = 'en';
  const t = en;

  const changeLanguage = (lang: string) => {
    // Language switching disabled - only English supported
    console.log('Language switching disabled');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
