import React, { useContext, useState } from "react";
import "./NavBar.css";
import Argentina from "../../images/argentina.png"
import Germany from "../../images/deutschland.png"
import Usa from "../../images/united-states.png"
import { Container, Navbar, Nav, Dropdown, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const [t, i18n] = useTranslation("global");

    const [language, setLanguage] = useState(localStorage.getItem('language'));

    const settingLanguage = (idioma) => {
      switch(idioma){
        case "en":
        localStorage.setItem("language", 'English');
        setLanguage('EN')
        break;
        case "es":
        localStorage.setItem("language", 'Spanish');
        setLanguage('ES')
        break;
        case "de":
        localStorage.setItem("language", 'German');
        setLanguage('DE')
        break;
      }
    }

  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container className="NavigationBar" fluid>
          <Dropdown className="trasnslate-button">
            <Dropdown.Toggle
              className="trasnslate-button-link"
              variant="link"
              id="dropdown-basic"
            >
              <img
                src="https://cdn2.iconfinder.com/data/icons/social-media-2259/512/translate-256.png"
                width="25"
                height="25"
                className="d-inline-block align-top"
                alt="Languages logo"
              />
              {language}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                href="#/action-1"
                onClick={() => {i18n.changeLanguage("English") ;{settingLanguage('en')}}}
              >
              <img
              src={Usa}
              width="30"
              height="25"
              href="#/action-2" />
                English
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {i18n.changeLanguage("Spanish") ;{settingLanguage('es')}}} 
              > 
              <img
              src={Argentina}
              width="30"
              height="25"
              href="#/action-2" />
                Español
              </Dropdown.Item>
              <Dropdown.Item
                href="#/action-3"
                onClick={() => {i18n.changeLanguage("German") ;{settingLanguage('de')}}}
              >
              <img
              src={Germany}
              width="30"
              height="25"
              href="#/action-2" />
                Deutsch
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "160px" }}
              navbarScroll
            >
              <Nav.Link activeclassname="active" href="/">
                {t("navbar.home")}
              </Nav.Link>
              <Nav.Link activeclassname="active" href="/about">
                {t("navbar.about")}
              </Nav.Link>
              <Nav.Link activeclassname="active" href="/resume">
                {t("navbar.resume")}
              </Nav.Link>
              <Nav.Link activeclassname="active" href="/contact">
                {t("navbar.contact")}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
