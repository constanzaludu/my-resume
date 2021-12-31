import React from "react";
import "./Card.css";
import { Card, Button } from 'react-bootstrap';
import PhotoCV from "../../../images/cv-photo.jpg";
import Printer from "../../../images/printer.png";
import { useTranslation } from "react-i18next";


const CardAbout = () => {

    const [t, i18n] = useTranslation("global");

    return ( 
        <Card className="tarjeta">
            <Card.Img variant="top" src={PhotoCV} />
            <Card.Body className="text-center">
                <Card.Title>{t("card.name")}</Card.Title>
                <Card.Text>{t("card.post")}</Card.Text>
                <Button className="boton" variant="outline-secondary"><img src={Printer} />{t("card.button")}</Button>
            </Card.Body>
        </Card>
     );
}
 
export default CardAbout;