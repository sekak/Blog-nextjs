'use client'
import Link from "next/link"
import style from './authLinks.module.css'
import { useState } from "react"
import { signOut, useSession } from "next-auth/react"

const AuthLinks = () => {
   const [open, setOpen] = useState(false)
  const {status} = useSession()
  console.log(status)
  return (
    <>
      {
        status === "unauthenticated" ?
          (<Link href="/login" className={style.link}>Login</Link>) :
          (<>
            <Link href='/write' className={style.link}>Write</Link>
            <span className={style.link} onClick={()=>signOut("google")}>Logout</span>
          </>)
      }
      <div className={`${style.burger}`} onClick={()=>setOpen(!open)} >
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
      </div>
      {
        open && (
          <div className={`${style.responsive} ${open && scroll}`}>
            <Link href='/' onClick={()=>setOpen(false)} className={style.menu}>Homepage</Link>
            <Link href='/' onClick={()=>setOpen(false)} className={style.menu}>Contact</Link>
            <Link href='/' onClick={()=>setOpen(false)} className={style.menu}>About</Link>
            {
              status === "unauthenticated" ?
                (<Link href="/login" onClick={()=>setOpen(false)}>Login</Link>) :
                (<>
                  <Link href='/write' onClick={()=>setOpen(false)}>Write</Link>
                  <span   onClick={()=>setOpen(false)}>Logout</span>
                </>)
            }
          </div>
        )
      }
    </>
  )
}

export default AuthLinks
