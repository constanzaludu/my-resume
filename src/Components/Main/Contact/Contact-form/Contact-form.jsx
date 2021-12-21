import React from "react";
import { Form, Button } from "react-bootstrap";
import './Contact-form.css'

const ContactForm = () => {
    return ( 
        <>
        <Form className="contenedor-contact">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Write your message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button className='boton-send' variant="outline-secondary" type="submit">
                Send
            </Button>
        </Form>
        </>
     );
}
 
export default ContactForm;