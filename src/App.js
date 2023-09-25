import NavBar from './Components/Header/NavBar';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from './Context/ThemeProvider';

function App() {
  return (
    <>
    <ThemeProvider>
        <NavBar />
        <Main />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
