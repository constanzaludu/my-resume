import { createContext, useState, useContext } from "react";

export const ThemeContext = createContext()

export const useTheme = () => {
    return useContext(ThemeContext);
  };

 const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');    
    
    const handleTheme = (e) => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        setTheme(newTheme);
    }

    const data = {theme, handleTheme};

        return (<ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>)
}

export default ThemeProvider;