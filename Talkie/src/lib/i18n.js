import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: { /* traducciones en español */ } },
    en: { translation: { /* traducciones en inglés */ } },
    // Otros idiomas...
  },
  lng: 'es',
  fallbackLng: 'es',
  interpolation: { escapeValue: false },
});

export default i18n;