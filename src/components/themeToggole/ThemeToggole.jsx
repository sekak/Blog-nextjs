'use client'
import Image from 'next/image'
import style from './themeToggole.module.css'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const ThemeToggole = () => {
   
  const {theme, toggole} = useContext(ThemeContext);
  console.log(theme)

   return (
    <div suppressHydrationWarning className={style.container} onClick={toggole} style={theme === "light" ? {backgroundColor:"#0f172a"} : {backgroundColor:"white"}}>
      <div suppressHydrationWarning className={style.ball} style={theme === "light" ? {left:"1px"} : {right:"1px"}}></div>
      <Image className={style.moon} src='/moon.png' alt='moon' width={15} height={15}/>
      <Image className={style.sun} src='/sun.png' alt='sun' width={15} height={15}/>
    </div>
  )
}

export default ThemeToggole
