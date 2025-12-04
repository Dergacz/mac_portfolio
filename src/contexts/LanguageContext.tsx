import { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import type { TFunction } from 'i18next';

type Language = 'en' | 'pl' | 'ru';

interface LanguageContextType {
  language: Language;
  changeLanguage: (lang: Language) => void;
  t: TFunction;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const getInitialLanguage = (): Language => {
  const storedLang = localStorage.getItem('language') as Language;
  if (storedLang && ['en', 'pl', 'ru'].includes(storedLang)) {
    return storedLang;
  }
  return 'en';
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const { i18n, t } = useTranslation();
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    const initialLang = getInitialLanguage();
    if (i18n.language !== initialLang) {
      i18n.changeLanguage(initialLang);
    }
  }, [i18n]);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
