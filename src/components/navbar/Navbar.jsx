import Link from 'next/link'
import style from './navbar.module.css'
import Image from 'next/image'
import ThemeToggole from '../themeToggole/ThemeToggole'
import AuthLinks from '../authLinks/AuthLinks'

const Navbar = () => {
    return (
        <div className={style.container}>
            <div className={style.social}>
                <Image src='/facebook.png' alt='facebook' width={24} height={24}/>
                <Image src='/instagram.png' alt='instagram' width={24} height={24}/>
                <Image src='/tiktok.png' alt='tiktok' width={24} height={24}/>
                <Image src='/youtube.png' alt='youtube' width={24} height={24}/>
            </div>
            <div className={style.logo}><Link href="/">MedBlog</Link></div>
            <div className={style.links}>
                <ThemeToggole/>
                <Link className={style.link} href='/'>Homepage</Link>
                <Link className={style.link} href=''>Contact</Link>
                <Link className={style.link} href=''>About</Link>
                <AuthLinks/>
             </div>
        </div>
    )
}

export default Navbar
