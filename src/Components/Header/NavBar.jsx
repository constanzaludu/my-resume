import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeProvider"
import "./NavBar.css";
import { Container, Navbar, Nav, Dropdown, Form, FormCheck } from "react-bootstrap";

const NavBar = () => {

  const {theme, handleTheme} = useContext(ThemeContext)

  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top" >
        <Container className="NavigationBar" fluid>
          <Dropdown className="trasnslate-button">
            <Dropdown.Toggle
              className="trasnslate-button-link"
              variant="link"
              id="dropdown-basic"
            >
              <img
                src="https://cdn2.iconfinder.com/data/icons/social-media-2259/512/translate-256.png"
                width="30"
                height="25"
                className="d-inline-block align-top"
                alt="Languages logo"
              />
              <span>English</span>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Spanish</Dropdown.Item>
              <Dropdown.Item href="#/action-2">German</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Form>
          <Form.Check
            inline
            label="Light"
            value='light'
            name="same"
            type="radio"
            onClick={handleTheme}
            id={'light1'}
          />
            <Form.Check
            inline
            label="Dark"
            value='dark'
            name="same"
            type="radio"
            onClick={handleTheme}
            id={'light2'}
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
                Home
              </Nav.Link>
              <Nav.Link activeclassname="active" href="/about">
                About
              </Nav.Link>
              <Nav.Link activeclassname="active" href="/resume">
                Resume
              </Nav.Link>
              <Nav.Link activeclassname="active" href="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
