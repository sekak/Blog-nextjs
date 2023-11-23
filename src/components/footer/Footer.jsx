import Image from 'next/image'
import style from './footer.module.css'

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <div className={style.details}>
          <Image src="/p1.jpeg" alt='' width={40} height={40} className={style.img} />
          <span className={style.logo}>Medblog</span>
        </div>
        <p className={style.desc}>lorem ipsum sit amet consr orem ipsum sit amet consr orem ipsum sit amet consrorem ipsum sit amet consrorem ipsum sit amet consrorem ipsum sit amet consr </p>
        <div className={style.icons}>
          <Image src='/facebook.png' alt='facebook' width={24} height={24} />
          <Image src='/instagram.png' alt='instagram' width={24} height={24} />
          <Image src='/tiktok.png' alt='tiktok' width={24} height={24} />
          <Image src='/youtube.png' alt='youtube' width={24} height={24} />
        </div>
      </div>
      <div className={style.right}>
        <ul className={style.head}>
          <span className={style.headlink}>Links</span>
          <li className={style.link}>Homepage</li>
          <li className={style.link}>Blog</li>
          <li className={style.link}>About</li>
          <li className={style.link}>Contact</li>
        </ul>
        <ul className={style.head}>
          <span className={style.headlink }>Tags</span>
          <li className={style.link }>Style</li>
          <li className={style.link }>Fashion</li>
          <li className={style.link }>Coding</li>
          <li className={style.link }>Travel</li>
        </ul>
        <ul className={style.head}>
          <span className={style.headlink }>Social</span>
          <li className={style.link }>Facebook</li>
          <li className={style.link }>Instagram</li>
          <li className={style.link }>Tiktok</li>
          <li className={style.link }>Youtube</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
