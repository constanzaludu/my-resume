import React from "react";
import { Form, Button } from "react-bootstrap";
import './Contact-form.css';
import { useTranslation } from "react-i18next";


const ContactForm = () => {

    const [t, i18n] = useTranslation("global");

    return ( 
        <>
        <Form className="contenedor-contact">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>{t("contact-form.email")}</Form.Label>
                <Form.Control type="email" placeholder={t("contact-form.example")} />
                <Form.Text className="text-muted">{t("contact-form.share")}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>{t("contact-form.write")}</Form.Label>
                <Form.Control className="my-text-area" as="textarea" rows={3} />
            </Form.Group>
            <Button className='boton-send' variant="outline-secondary" type="submit">
                {t("contact-form.send")}
            </Button>
        </Form>
        </>
     );
}
 
export default ContactForm;