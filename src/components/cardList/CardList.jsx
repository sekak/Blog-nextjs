import Pagination from '../pagination/Pagination'
import style from './cardList.module.css'
import Card from '../card/Card'
 
 

const getData = async ({page,cat}) => {

  const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, { cache: "no-store" })
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
        {
          data?.map((item)=>{
            return <Card key={item._id} item={item}/>
          })
        }
      </div>
      <Pagination page={page} count={count} cat={cat}/>
     </div>
  )

}

export default CardList
