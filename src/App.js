import NavBar from './Components/Header/NavBar';
import Footer from './Components/Footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from '../src/images/laptop-accesories.jpg'
import Rutas from './Components/Rutas/Rutas';


function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      
      <main style={{  backgroundImage:`url(${Background})`, 
                      padding: "1.5rem",
                      backgroundSize:'cover', 
                      backgroundRepeat:'no-repeat'}}>
        <Rutas />
      </main>
      
      <footer>
        <Footer />
      </footer>
    
  
    </>
  );
}

export default App;
