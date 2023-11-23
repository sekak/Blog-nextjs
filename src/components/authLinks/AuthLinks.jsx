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
            <Link href='/' className={style.menu}>Homepage</Link>
            <Link href='/' className={style.menu}>Contact</Link>
            <Link href='/' className={style.menu}>About</Link>
            {
              status === "unauthenticated" ?
                (<Link href="/login">Login</Link>) :
                (<>
                  <Link href='/write'>Write</Link>
                  <span className={style.link}>Logout</span>
                </>)
            }
          </div>
        )
      }
    </>
  )
}

export default AuthLinks
