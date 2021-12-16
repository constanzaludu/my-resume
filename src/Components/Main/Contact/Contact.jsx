import React from "react";
import "./Contact.css"
import { Container, Form } from "react-bootstrap";

const Contacto = () => {
    return ( 
        <>
        <Container >
            <div className="container-contact">
                <h3>Contact information</h3>
                <p>Email address: constanza.ludu@gmail.com</p>
                <p>Cell-phone: +34 641033789</p>
                <p>WhatsApp: +54 0236 154418354</p>
                <p>Country of origin: Argentina</p>
                <p>Country of residence: Spain</p>
            </div>
            <br />
            <Form className="container-contact">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            </Form>
        </Container>
        </>
     );
}
 
export default Contacto;