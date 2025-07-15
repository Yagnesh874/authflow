import React, { createContext,useEffect, useState , useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [darkMode , setMarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    )

    
    useEffect(()=>{
        if(darkMode){
            document.body.classList.add("dark-theme");
            localStorage.setItem("theme" , "dark")
        }
        else{
            document.body.classList.remove("dark-theme");
            localStorage.setItem("theme","light")
        }
    },[darkMode])

    const toggleTheme = () =>{
        setMarkMode((prev) => !prev )
    }
  return (
    <>
        <ThemeContext.Provider value={{darkMode , toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    </>
  )
}

export const useTheme = () =>{
   return useContext(ThemeContext)    
}