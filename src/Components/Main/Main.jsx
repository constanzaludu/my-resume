import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeProvider"
import Rutas from '../Rutas/Rutas';
import "./Main.css";

const Main = () => {

    const {theme} = useContext(ThemeContext)

    return ( 
        <main className={theme}>
            <Rutas />
        </main>
     );
}
 
export default Main;