import { createContext, useState } from "react";

export const ThemeContext = createContext()

 const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState("light");
    
    const handleTheme = (e) => {
        if (e.target.value === "light"){
            setTheme("light")    
        }
        else {
            setTheme("dark")
        }
    }

    const data = {theme, handleTheme};

        return (<ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>)
}

export default ThemeProvider;