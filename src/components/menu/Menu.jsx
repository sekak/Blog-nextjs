import Link from 'next/link'
import style from './menu.module.css'
import MenuCategory from '../MenuCategory/MenuCategory'

const Menu = () => {
  return (
    <div className={style.container}>
      <div className={style.titles}>
        <h2 className={style.subtitle}>{"What's hot"}</h2>
        <h1 className={style.title}>Most Popular</h1>
      </div>
      <MenuCategory existImg={false}/>
     
      <div className={style.titles}>
        <h2 className={style.subtitle}>{"Discover by topic"}</h2>
        <h1 className={style.title}>Categories</h1>
      </div>
      <div className={style.items}>
        <div className={style.cat}>
          <Link href='/' className={`${style.cat} ${style.style} `}>Style</Link>
          <Link href='/' className={`${style.cat} ${style.fashion} `}>Fashion</Link>
          <Link href='/' className={`${style.cat} ${style.food} `} >Food</Link>
          <Link href='/' className={`${style.cat} ${style.travel} `}>Travel</Link>
          <Link href='/' className={`${style.cat} ${style.culture} `}>Culture</Link>
          <Link href='/' className={`${style.cat} ${style.coding} `}>Coding</Link>
         </div>
      </div>

      <div className={style.titles}>
        <h2 className={style.subtitle}>{"Chosen by the editor"}</h2>
        <h1 className={style.title}>Editor Pick</h1>
      </div>
      <MenuCategory existImg={true}/>
     
    </div>
  )

}

export default Menu
