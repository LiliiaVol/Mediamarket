import "./Header.scss";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export const Header = () => {
  const { t, i18n } = useTranslation();
  const [lng, setLng] = useState(navigator.language);

  useEffect(() => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  const switchToUkrainian = () => {
    setLng("uk");
  };

  const switchToEnglish = () => {
    setLng("en");
  };

  return (
    <header className="header" id="header">
      <div className="header__container container">
        <div className="header__icon-container">
          <a href="/">
            <img src="/icons/paw-solid.svg" className="header__icon" />
          </a>
        </div>
        <nav className="header__links-container">
          <p className="header__link">
            <a href="#form">{t("navbar.contactUs")}</a>
          </p>
          <p className="header__link">
            <a href="#textContainer">{t("navbar.about")}</a>
          </p>
          <p className="header__link">
            <a href="#slider">{t("navbar.dogs")}</a>
          </p>
          <p className="header__link">
            <a onClick={lng === "uk" ? switchToEnglish : switchToUkrainian}>
              {t("language.switchToUkr")}
            </a>
          </p>
        </nav>
      </div>
    </header>
  );
};
