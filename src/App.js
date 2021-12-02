import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Footer from './Components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from '../src/images/laptop-accesories.jpg'


function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main style={{ backgroundImage:`url(${Background})`, backgroundSize:'cover' , backgroundRepeat:'no-repeat'}}>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    
  
    </>
  );
}

export default App;
