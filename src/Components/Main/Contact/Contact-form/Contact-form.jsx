import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import "./Contact-form.css";
import { useTranslation } from "react-i18next";
import ApiKey from "../../../../recursos/ApiKey";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactForm = () => {
  const [t, i18n] = useTranslation("global");

  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [modal_message, setMessage] = useState("");

  const [modal_title, setTitle] = useState("");

  const enviarCorreo = (e) => {
    e.preventDefault();
    emailjs
      .send(ApiKey.SERVICE_ID, ApiKey.TEMPLATE_ID, toSend, ApiKey.USER_ID)

      .then(
        (result) => {
          setTitle("Thanks for your email! :)");
          setMessage(
            "Your email was successfully sent. I will get back to you shortly."
          );
          handleShow();
        },
        (error) => {
          setTitle("Your email cannot be sent.. :(");
          setMessage("Oops... something went wrong!!! Please try again later.");
          handleShow();
        }
      );
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Form onSubmit={enviarCorreo} className="contenedor-contact">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>{t("contact-form.name")}</Form.Label>
          <Form.Control
            value={toSend.name}
            required
            onChange={handleChange}
            name="name"
            type="text"
            placeholder={t("contact-form.name-box")}
          />
          <Form.Label>{t("contact-form.email")}</Form.Label>
          <Form.Control
            value={toSend.email}
            required
            onChange={handleChange}
            name="email"
            type="email"
            placeholder={t("contact-form.example")}
          />
          <Form.Text className="text-muted">
            {t("contact-form.share")}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>{t("contact-form.write")}</Form.Label>
          <Form.Control
            value={toSend.message}
            name="message"
            required
            onChange={handleChange}
            className="my-text-area"
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Button
          className="boton-send"
          variant="outline-secondary"
          type="submit"
        >
          {t("contact-form.send")}
        </Button>
      </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modal_title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modal_message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ContactForm;
