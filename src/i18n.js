// src/i18n.js
import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend) // Load translations from backend files
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n instance to react-i18next
  .init({
    fallbackLng: "en", // Fallback language if no translation found
    // Enable debug logs for development
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // Path to translation files
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"],
    },
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    react: {
      useSuspense: true, // Enable suspense mode for loading translations
    },
  });

export default i18n;
