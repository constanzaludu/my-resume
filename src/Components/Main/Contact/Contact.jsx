import React from "react";
import ContactForm from "./Contact-form/Contact-form";
import ContactInfo from "./Contact-info/Contact-info";
import { Container, Row, Col } from "react-bootstrap";

const Contacto = () => {
    return ( 
        <>
        <Container >
            <Row>
                <Col>
                    <ContactInfo />
                </Col>
                <Col>
                    <ContactForm />
                </Col>
            </Row>
        </Container>
        </>
     );
}
 
export default Contacto;