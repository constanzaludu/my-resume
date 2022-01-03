import React from "react";
import "./AboutMe.css";
import { useTranslation } from "react-i18next";

const SobreMi = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <>
      <div className="div-contenedor">
        <h2>{t("about-me.title")}</h2>  
        <h5>{t("about-me.title-who")}</h5>
        <p>{t("about-me.paragraph-who")}</p>
        <h5>{t("about-me.title-why")}</h5>
        <p>{t("about-me.paragraph-why")}</p>
        <h5>{t("about-me.title-academic")}</h5>
        <p>{t("about-me.paragraph1-academic")}</p>
        <p>{t("about-me.paragraph2-academic")}</p>
      </div>
    </>
  );
};

export default SobreMi;
