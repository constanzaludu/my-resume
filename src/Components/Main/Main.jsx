import React, { useContext } from "react";
import { ThemeContext } from "../../Context/ThemeProvider";
import Rutas from '../Rutas/Rutas';
import "./Main.css";

const Main = () => {

    const {theme} = useContext(ThemeContext)

    // function swapStyleSheet(sheet){
    //     document.getElementById('theme').setAttribute('href', sheet);
    //     localStorage.setItem("sheet", sheet);
    //   }
      
    //   window.onload = _ =>
    //    swapStyleSheet(
    //     localStorage.getItem("sheet") || "default.css"
    //    );
       
    return ( 
        <main className={`main-component ${theme}`}>
            <Rutas />
        </main>
     );
}
 
export default Main;