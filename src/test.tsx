
import { useTranslation } from '../node_modules/react-i18next';
import i18n from 'i18next';
import { initReactI18next } from '../node_modules/react-i18next';

// Initialize i18n
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "welcome": "Welcome to our multi-language app!",
          "choose": "Choose a language:",
          "greeting": "Hello, world!"
        }
      },
      es: {
        translation: {
          "welcome": "¡Bienvenido a nuestra aplicación multilingüe!",
          "choose": "Elige un idioma:",
          "greeting": "¡Hola, mundo!"
        }
      },
      fr: {
        translation: {
          "welcome": "Bienvenue dans notre application multilingue !",
          "choose": "Choisissez une langue :",
          "greeting": "Bonjour, le monde !"
        }
      },
      vi: {
        translation: {
          "welcome": "Chào mừng bạn đến với ứng dụng đa ngôn ngữ của chúng tôi!",
          "choose": "Chọn một ngôn ngữ:",
          "greeting": "Xin chào, thế giới!"
        }
      }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: 'en' | 'es' | 'fr' | 'vi') => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="space-x-2">
      <button className="px-2 py-1 border rounded" onClick={() => changeLanguage('en')}>English</button>
      <button className="px-2 py-1 border rounded" onClick={() => changeLanguage('es')}>Español</button>
      <button className="px-2 py-1 border rounded" onClick={() => changeLanguage('fr')}>Français</button>
      <button className="px-2 py-1 border rounded" onClick={() => changeLanguage('vi')}>Tiếng Việt</button>
    </div>
  );
};

const Test = () => {
  const { t } = useTranslation();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{t('welcome')}</h1>
      <p className="mb-2">{t('choose')}</p>
      <LanguageSwitcher />
      <p className="mt-4">{t('greeting')}</p>
    </div>
  );
};

export default Test;