'use client'
import { signIn, useSession } from 'next-auth/react'
import style from './login.module.css'
import { useRouter } from 'next/navigation'

const Login = () => {
    const {data , status} = useSession()
    const router = useRouter();    
    
    if(status === 'loading')
    {
        return <div className={style.loading}>Loding</div>
    }

    if(status === 'authenticated')
        router.push('/')

    
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <button className={style.buttonContainer} onClick={()=> signIn("google")}>Sign in with Google</button>
                <button className={style.buttonContainer} onClick={()=> signIn("42-school")}>Sign in with Github</button>
                <button className={style.buttonContainer}>Sign in with Facebook</button>
            </div>
        </div>
    )
}

export default Login
