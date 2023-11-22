import Rutas from '../Rutas/Rutas';
import "./Main.css";

const Main = () => {

    // function swapStyleSheet(sheet){
    //     document.getElementById('theme').setAttribute('href', sheet);
    //     localStorage.setItem("sheet", sheet);
    //   }
      
    //   window.onload = _ =>
    //    swapStyleSheet(
    //     localStorage.getItem("sheet") || "default.css"
    //    );
       
    return ( 
        <main>
            <Rutas />
        </main>
     );
}
 
export default Main;