import NavBar from './Components/Header/NavBar';
import Home from './Components/Main/Home';
import Footer from './Components/Footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from '../src/images/laptop-accesories.jpg'


function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      
      <main style={{  backgroundImage:`url(${Background})`, 
                      padding: "45px",
                      backgroundSize:'cover', 
                      backgroundRepeat:'no-repeat'}}>
        <Home />
      </main>
      
      <footer>
        <Footer />
      </footer>
    
  
    </>
  );
}

export default App;
