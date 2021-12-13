import React from "react";
import Card from "./Card";
import AboutMe from "./AboutMe"
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
    return ( 
        <>
        <Container >
            <Row>
                <Col>
                    <Card />
                </Col>
                <Col>
                    <AboutMe />
                </Col>
            </Row>
        </Container>
        </>
     );
}
 
export default About;