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
                      minHeight:'calc(100vh - 57px - 65px)',
                      baxkgroundPosition: 'center',
                      baxkgroundColor: '#c6c6c6',
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
