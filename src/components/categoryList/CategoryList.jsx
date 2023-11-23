import Image from 'next/image'
import style from './categoryList.module.css'
import Link from 'next/link'

const getData = async ()=>{
  const res = await fetch(`http://localhost:3000/api/categories?page=1`,{cache:"no-store"})
  if(!res.ok)
    throw new Error("Can't get data from categories")
  return res.json()
}

const CategoryList = async () => {
  const data  = await getData()
  // console.log(data)

  return (
    <div className={style.container}>
      <h1 className={style.title}>Popular Categories</h1>
      <div className={style.categories}>
       
        {
          data.map((item)=>{
            return(
              <Link href={`/blog?cat=${item.title}`} className={`${style.category} ${style[item.title]}`}>
              <Image className={style.img} src={item.img} alt='style' width={32} height={32} />
              {item.title}
            </Link>
            )
          })
        }        
      </div>
    </div>
  )

}

export default CategoryList
