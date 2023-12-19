import Image from 'next/image'
import style from './categoryList.module.css'
import Link from 'next/link'

const getData = async ()=>{
  
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/categories`,{cache:"no-store"})
  if(res.ok)
    return res.json();
 
    return  null;
}

const CategoryList = async () => {
  const data  = await getData()
 
  // console.log(data)

  return (
    <div className={style.container}>
      <h1 className={style.title}>Popular Categories</h1>
      <div className={style.categories}>
       
        {data ?
          data.map((item)=>{
            return(
              <Link key={item.title} href={`/blog?cat=${item.title}&page=1`} className={`${style.category} ${style[item.title]}`}>
              <Image className={style.img} src={item.img} alt='style' width={32} height={32} />
              {item.title}
            </Link>
            )
          }) : (
            <h3 style={{fontWeight:"100", color:"red"}}>
              Not Found Categories List
            </h3>
          )
        }        
      </div>
    </div>
  )

}

export default CategoryList
