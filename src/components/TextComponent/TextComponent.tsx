import { useTranslation } from "react-i18next";

export const TextComponent = () => {
  const { t } = useTranslation();

  return (
    <div className="container" id="textContainer">
      <div>
        <article>
          <h1>{t("texts.h1")}</h1>
          <p>{t("texts.textMain")}</p>
        </article>
        <article>
          <h1>{t("texts.h1")}</h1>
          <p>{t("texts.textMain")}</p>
        </article>
      </div>
    </div>
  );
};
