import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Footer = () => {
    return ( 
        <Navbar bg="light">
        <Container>
            <Navbar.Brand href="#home">
            <img
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
            />
            </Navbar.Brand>
        </Container>
        </Navbar>
     );
}
 
export default Footer;