'use client'
import React, { Children, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const ThemeProvider = ({ children }) => {
    const { theme } = useContext(ThemeContext)
    return (
        <div suppressHydrationWarning className={theme}>
            {children}
        </div>
    )
}

export default ThemeProvider
