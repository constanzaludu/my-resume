import React from "react";
import { Navbar, Container } from "react-bootstrap";
import LinkedIn from '../../images/linkedin.png'
import GitHub from '../../images/github.png'
import Gmail from '../../images/gmail.png'
import Slack from '../../images/slack.png'
import { useContext } from "react";
import ThemeContext from "../Context/ThemeProvider";

const Footer = () => {

    const {theme} = useContext(ThemeContext)

    return ( 
        <Navbar  bg="light" fixed="bottom">

        <Container className="d-flex justify-content-end" >
            <Navbar.Brand href="#home">
            <img
                src={LinkedIn}
                width="40"
                height="auto"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
            <img
                src={GitHub}
                width="40"
                height="auto"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
            <img
                src={Gmail}
                width="40"
                height="auto"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
            <img
                src={Slack}
                width="40"
                height="auto"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
            </Navbar.Brand>
        </Container>
        </Navbar>
     );
}
 
export default Footer;