import React, { useContext, useState } from "react";
import ThemeContext from "../Context/ThemeProvider";
import "./NavBar.css";
import Argentina from "../../images/argentina.png"
import Germany from "../../images/deutschland.png"
import America from "../../images/united-states.png"
import { Container, Navbar, Nav, Dropdown, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const [t, i18n] = useTranslation("global");

    const [language, setLanguage] = useState(localStorage.getItem('language'));

    const settingLanguage = (idioma) => {
      switch(idioma){
        case "en":
        localStorage.setItem("language", 'English');
        setLanguage('English')
        break;
        case "es":
        localStorage.setItem("language", 'Spanish');
        setLanguage('Spanish')
        break;
        case "de":
        localStorage.setItem("language", 'German');
        setLanguage('German')
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
              src={America}
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
                Spanish
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
                German
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Form>
            <Form.Check
              inline
              label={t("languages.light")}
              value="light"
              name="same"
              type="radio"
              onClick={handleTheme}
              id={"light1"}
            />
            <Form.Check
              inline
              label={t("languages.dark")}
              value="dark"
              name="same"
              type="radio"
              onClick={handleTheme}
              id={"light2"}
            />
          </Form>

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
