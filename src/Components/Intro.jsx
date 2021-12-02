import "./Intro.css";
import Background from "../images/laptop-white.jpg";
import { Container } from 'react-bootstrap';


const Intro = () => {
    return ( 
        <>
            <Container className="Container-name">
                <div className='Intro'>
                        <h2>I'm Constanza Luduena.</h2>
                        <p>I'm a Full Stack developer, originally from Argentina 🇦🇷, but currently located in Spain 🇪🇸.</p>
                        <p>Curiosity has always been my biggest friend.</p>
                </div>
            </Container>

    </>
     ); 
        }
     export default Intro;