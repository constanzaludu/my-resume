import React from "react";
import './Contact-info.css';
import { useTranslation } from "react-i18next";


const ContactInfo = () => {
    
    const [t, i18n] = useTranslation("global");

    return ( 
        <>
        <div className="container-contact">
            <h2 className="text-center">{t("contact-info.info")}</h2>
            <ul>
                <li>{t("contact-info.email")}<span>: constanza.ludu@gmail.com</span></li>
                <li>{t("contact-info.phone")}<span>: +34 641033789</span></li>
                <li>{t("contact-info.wpp")}<span>: +54 0236 154418354</span></li>
                <li>{t("contact-info.origen")}<span>: {t("contact-info.argentina")}</span></li>
                <li>{t("contact-info.residence")}<span>: {t("contact-info.spain")}</span></li>
            </ul>
        </div>        
        </>
     );
}
 
export default ContactInfo;