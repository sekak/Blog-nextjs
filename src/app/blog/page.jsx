 // import CardList from './components/cardList/CardList'
// import Menu from './components/menu/Menu'
 import CardList from '../../components/cardList/CardList'
 import Menu from '../../components/menu/Menu'
import style from './blog.module.css'
 
const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  console.log("'=>>>>>>>>'",cat)
  return (
    <div className={style.container}>
        <h1 className={style.title}>{cat} Blog</h1>
        <div className={style.wrap}>
          <CardList page={page}  cat={cat}/>
         <Menu/>
        </div>
    </div>
  )
}

export default BlogPage
