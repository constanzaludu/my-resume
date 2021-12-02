import React from "react";
import './NavBar.css';
import { Container, Navbar, Nav, Dropdown, Form } from 'react-bootstrap';

const NavBar = () => {
    return ( 
        <>
        <Navbar className='navbar' bg="light" expand="lg">
            <Container className='NavigationBar' fluid>
            <Dropdown className='trasnslate-button'>
            <Dropdown.Toggle className='trasnslate-button-link' variant="link" id="dropdown-basic">
                    <img
                    src='https://cdn2.iconfinder.com/data/icons/social-media-2259/512/translate-256.png'
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
                    type="switch"
                    id="custom-switch"
                    label="Dark mode"
                />
            </Form>    

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '150px' }}
                navbarScroll
            >
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">About</Nav.Link>
                <Nav.Link href="#action2">Resume</Nav.Link>
                <Nav.Link href="#action2">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            
        </Container>
        </Navbar>

        </>

     );
}
 
export default NavBar;