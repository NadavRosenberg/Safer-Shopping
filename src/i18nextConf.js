import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const availableLanguages = ['en', 'il'];

i18n
    .use(LanguageDetector) // detect user language
    .use(initReactI18next) // pass the i18n instance to react-i18next.
    .init({
        fallbackLng: 'en',
        detection: {
            checkWhitelist: true, // options for language detection
        },
        resources: {
            en: {
                translation: {
                    'about': 'about',
                    'title': 'title',
                    'price': 'price',
                    'address': 'address',
                    'notes': 'notes',
                    'select-language': 'Select a Language',
                    'app-name': 'Safer Shopper',
                    'add': 'add',
                    'close': 'close',
                    'copyright': 'Copyright',
                    'save-home': 'Save Home',
                    'add-title': 'Add Title',
                    'add-address': 'Add Address',
                    'add-notes': 'Add Notes',
                    'version': 'Version 1.1.0',
                    'go-back': 'Go Back',
                }
            },
            il: {
                translation: {
                    'about': 'אודות',
                    'title': "כותרת",
                    'price': 'מחיר',
                    'address': 'כתובת',
                    'notes': 'הערות',
                    'select-language': 'בחר שפה',
                    'app-name': 'קנייה חכמה',
                    'add': 'הוסף',
                    'close': 'סגור',
                    'copyright': `זכויות שמורות`,
                    'save-home': 'שמור בית',
                    'add-title': 'הוסף כותרת',
                    'add-address': 'הוסף כתובת',
                    'add-notes': 'הוסף הערות',
                    'version': 'גירסה 1.1.0',
                    'go-back': 'חזרה',
                }
            }
        },
        debug: false,
        whitelist: availableLanguages,
        interpolation: {
            escapeValue: false, // no need for react. it escapes by default
        },
    });

export default i18n;