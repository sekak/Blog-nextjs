import Pagination from '../pagination/Pagination'
import style from './cardList.module.css'
import Card from '../card/Card'
import Link from 'next/link'
  
 

const getData = async ({page,cat}) => {
   

  // if (typeof window !== "undefined") 
  // console.log("location ++++++===> ", window.location.href);  
  const res = await fetch(`${process.env.PATH}/api/posts?page=${page}&cat=${cat || ""}`, { cache: "no-store" })
  if (!res.ok)
    throw new Error("Something is went wrang");
   
  return res.json()
}


const CardList = async ({page, cat}) => {
   const {data,count} = (await getData({page,cat}));
  
   console.log(data)
   return (
    <div className={style.container}>
      <h1 className={style.title}>Recent Posts</h1>
      <div className={style.posts}>
        {data ?
          data?.map((item)=>{
            return <Card key={item._id} item={item} />
          }) : (
            <div style={{fontWeight:100 , color:"red"}}>Not Post Available</div>
          )
        }
      </div>
      <Pagination page={page} count={count} cat={cat} data={data}/>
     </div>
  )

}

export default CardList
