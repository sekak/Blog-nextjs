'use client'

import { createContext, useEffect, useState } from "react";
 
export const ThemeContext = createContext();

const getFromLocalStorage = () => {
    if (typeof window != 'undefined')
        return localStorage.getItem("theme") || "light"
    return "light";
}

export const ThemeContextProvider = ({ children }) => {

    const [theme, setTheme] = useState(()=>{return getFromLocalStorage()})
    const toggole = ()=>{
       setTheme(theme === 'light' ? "dark" : "light")
    }
    
    useEffect(()=>{
        localStorage.setItem("theme",theme)
    },[theme])

    return <ThemeContext.Provider value={{ theme, toggole }}>{children}</ThemeContext.Provider>
}