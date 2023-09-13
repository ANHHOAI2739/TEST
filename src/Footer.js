import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <h3>{t('madeBy')}</h3>
      <div>
        <span>{t('availableOn')}</span>
        <span
          className={`language-picker ${
            i18n.language === 'vi' ? 'selected' : ''
          }`}
          onClick={() => changeLanguage('vi')}
        >
          🇻🇳
        </span>
        <span
          className={`language-picker ${
            i18n.language === 'en' ? 'selected' : ''
          }`}
          onClick={() => changeLanguage('en')}
        >
          🇺🇸
        </span>
      </div>
    </div>
  );
};

export default Footer;
