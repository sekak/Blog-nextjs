import style from '../menu/menu.module.css'
import Image from 'next/image'
import Link from 'next/link'

const MenuCategory = ({existImg}) => {
  return (
   
    <div className={style.items}>
    <Link href='/' className={style.item}>
    {existImg &&  <div className={style.imgContainer}>
        <Image src="/p1.jpeg" alt='' width={90} height={90} className={style.img} />
      </div> }
      <div className={style.textContainer}>
        <span className={`${style.travel} ${style.category}`}>Travel</span>
        <h3 className={style.post}>Lorem ipsum dolor itim amet consector adipiscing elit.</h3>
        <div className={style.details}>
          <span className={style.username}>John Doe</span>
          <span className={style.date}> - 10.03.2023</span>
        </div>
      </div>
    </Link>
    <Link href='/' className={style.item}>
    {existImg &&  <div className={style.imgContainer}>
        <Image src="/p1.jpeg" alt='' width={90} height={90} className={style.img} />
      </div>}
      <div className={style.textContainer}>
        <span className={`${style.culture} ${style.category}`}>Culture</span>
        <h3 className={style.post}>Lorem ipsum dolor itim amet consector adipiscing elit.</h3>
        <div className={style.details}>
          <span className={style.username}>John Doe</span>
          <span className={style.date}> - 10.03.2023</span>
        </div>
      </div>
    </Link>
    <Link href='/' className={style.item}>
    {existImg && <div className={style.imgContainer}>
        <Image src="/p1.jpeg" alt='' width={90} height={90} className={style.img} />
      </div>}
      <div className={style.textContainer}>
        <span className={`${style.food} ${style.category}`}>Food</span>
        <h3 className={style.post}>Lorem ipsum dolor itim amet consector adipiscing elit.</h3>
        <div className={style.details}>
          <span className={style.username}>John Doe</span>
          <span className={style.date}> - 10.03.2023</span>
        </div>
      </div>
    </Link>
    <Link href='/' className={style.item}>
    {existImg && <div className={style.imgContainer}>
        <Image src="/p1.jpeg" alt='' width={90} height={90} className={style.img} />
      </div>}
      <div className={style.textContainer}>
        <span className={`${style.fashion} ${style.category}`}>Fashion</span>
        <h3 className={style.post}>Lorem ipsum dolor itim amet consector adipiscing elit.</h3>
        <div className={style.details}>
          <span className={style.username}>John Doe</span>
          <span className={style.date}> - 10.03.2023</span>
        </div>
      </div>
    </Link>
  </div>
  
  )
}

export default MenuCategory
