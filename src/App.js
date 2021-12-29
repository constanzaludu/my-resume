import NavBar from './Components/Header/NavBar';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from "./Components/Context/ThemeProvider"


function App() {
  return (
    <>
    <ThemeProvider>
        <header>
          <NavBar />
        </header>
        <Main />
        <footer>
          <Footer />
        </footer>
    </ThemeProvider>
    </>
  );
}

export default App;
