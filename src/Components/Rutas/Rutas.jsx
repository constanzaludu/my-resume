import React from "react";
import Home from "../Main/Home/Home";  
import About from "../Main/About/About";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom"

const Rutas = () => {
    return ( 
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/about" element={<About />} />
    {/* 
                <Route path="/resume" element={<Resume />} />

                <Routes path="/contact" element={<Contact />} /> */}
                </Routes>
        </Router>

     );
}
 
export default Rutas;
