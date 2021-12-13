import React from "react";
import "./Card.css";
import { Card, Button } from 'react-bootstrap';
import PhotoCV from "../../../images/cv-photo.jpg";
import Printer from "../../../images/printer.png"

const CardAbout = () => {
    return ( 
        <Card className="tarjeta">
            <Card.Img variant="top" src={PhotoCV} />
            <Card.Body className="text-center">
                <Card.Title>Constanza Luduena</Card.Title>
                <Card.Text>
                Full Stack developer.
                </Card.Text>
                <Button className="boton" variant="outline-secondary"> 
                    <img src={Printer} />
                Print resume</Button>
            </Card.Body>
        </Card>
     );
}
 
export default CardAbout;