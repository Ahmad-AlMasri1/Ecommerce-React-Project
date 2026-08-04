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
            "Profile": "Profile",
            "Dark Mode": "Dark Mode",
            "Light Mode": "Light Mode",
            "AR":"AR",
            "EN":"EN",
            "© 2024 ShopModern. All rights reserved.":"© 2024 ShopModern. All rights reserved.",
            "Privacy Policy":"Privacy Policy",
            "Terms of Service":"Terms of Service",
            "Help Center":"Help Center",
            "Upgrade Your Lifestyle":"Upgrade Your Lifestyle",
            "Discover our new collection of premium essentials designed for the modern individual.":"Discover our new collection of premium essentials designed for the modern individual.",
            "Shop Now":"Shop Now",
            "Explore Categories":"Explore Categories",
            "Electronics":"Electronics",
            "Clothes":"Clothes",
            "Mobiles":"Mobiles",
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
            "Profile": "الملف الشخصي",
            "Dark Mode": "الوضع المظلم",
            "Light Mode": "الوضع المضيء",
            "AR":"العربية",
            "EN":"الإنجليزية",
            "© 2024 ShopModern. All rights reserved.":"© 2024 شوب مودرن. جميع الحقوق محفوظة.",
            "Privacy Policy":"سياسة الخصوصية",
            "Terms of Service":"شروط الخدمة",
            "Help Center":"مركز المساعدة",
            "Upgrade Your Lifestyle":"إرتقي في نمط حياتك",
            "Discover our new collection of premium essentials designed for the modern individual.":"اكتشف مجموعتنا الجديدة من المنتجات الأساسية الفاخرة المصممة للفرد العصري.",
            "Shop Now":"تسوق الآن",
            "Explore Categories":"استكشف الفئات",
            "Electronics":"Electronics",
            "Clothes":"ملابس",
            "Mobiles":"هواتف",
            }
        }
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    }
    ,fallbackLng: "en" // use en if detected lng is not available
  });
export default i18n;