import React from "react";
import "./Home.css";
import { Container } from 'react-bootstrap';
import { useTranslation } from "react-i18next";



const Home = () => {

    const [t, i18n] = useTranslation("global");

  return ( 
    <>
    
        <Container className="Container-name">
            <div className='Intro' >
                        <h2>{t("home.title")}</h2>
                        <p>{t("home.paragraph1")}</p>
                        <p>{t("home.paragraph2")}</p>
            </div>
        </Container>

    </>
    );
};

export default Home;
