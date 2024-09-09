import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../../locales/en/translation.json";
import fr from "../../locales/fr/translation.json";

const resources = {
  fr: {
    translation: fr,
  },
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  resources,
  debug: false, // true: active le mode debug
  lng: "fr", // langue par défaut
  fallbackLng: "fr", // langue par défaut si la langue actuelle n'est pas disponible
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
