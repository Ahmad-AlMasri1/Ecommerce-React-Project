import i18n from "i18next";
import {createRoot} from 'react-dom/client'
import { useTranslation, initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

i18n
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    resources:{
        en: {
            translation: {
            "Home": "Home",
            "Products": "Products",
            "Cart": "Cart",
            "Login": "Login",
            "Logout": "Logout",
            "Register": "Register",
            "Categories": "Categories",
            "Products": "Products",
            }
        },
        ar: {
            translation: {
            "Home": "الرئيسية",
            "Products": "المنتجات",
            "Cart": "السلة",
            "Login": "تسجيل الدخول",
            "Logout": "تسجيل الخروج",
            "Register": "تسجيل جديد",
            "Categories": "الفئات",
            "Products": "المنتجات",
            }
        }
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    }
    ,fallbackLng: "en" // use en if detected lng is not available
  });
export default i18n;