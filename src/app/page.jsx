import style from './homepage.module.css'
import Feature from "../components/feature/Feature";
import CategoryList from "../components/categoryList/CategoryList";
import CardList from "../components/cardList/CardList";
import Menu from '../components/menu/Menu';

export default function Home({ searchParams }) {
  console.log("=>", searchParams)
  const page = parseInt(searchParams.page) || 1;
  

  return (
    <div className={style.container}>
      <Feature />
      <CategoryList />
      <div className={style.content}>
        <CardList page={page}/>
        <Menu />
      </div>
    </div>
  )
}
