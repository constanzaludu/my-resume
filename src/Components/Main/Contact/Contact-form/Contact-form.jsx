import React from "react";
import { Form, Button } from "react-bootstrap";
import './Contact-form.css';
import { useTranslation } from "react-i18next";
import ApiKey from "../../../../recursos/ApiKey";
import emailjs from '@emailjs/browser';
import { useState } from "react";

const ContactForm = () => {

    const [t, i18n] = useTranslation("global");

    const [toSend, setToSend] = useState({
        email: '',
        message: '',
      });

      const enviarCorreo = (e) => {
        e.preventDefault();
        emailjs.send(
         ApiKey.SERVICE_ID,
          ApiKey.TEMPLATE_ID,
          toSend,
          ApiKey.USER_ID
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
      };

      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

    return ( 
        <>
        <Form onSubmit = {enviarCorreo} className="contenedor-contact">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>{t("contact-form.email")}</Form.Label>
                <Form.Control value={toSend.email}
    onChange={handleChange} name="email" type="email" placeholder={t("contact-form.example")} />
                <Form.Text className="text-muted">{t("contact-form.share")}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>{t("contact-form.write")}</Form.Label>
                <Form.Control value={toSend.message} name="message"
                onChange={handleChange} className="my-text-area" as="textarea" rows={3} />
            </Form.Group>
            <Button className='boton-send' variant="outline-secondary" type="submit">
                {t("contact-form.send")}
            </Button>
        </Form>
        </>
     );
}
 
export default ContactForm;