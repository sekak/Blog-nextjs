import Comment from '../../components/comment/Comment'
import Menu from '../../components/menu/Menu'
import style from './singlepage.module.css'
import Image from 'next/image'

const page = () => {
    return (
        <div className={style.container}>
            <div className={style.infoContainer}>
                <div className={style.textContainer}>
                    <h1 className={style.title}>Lorem ipsum dolor sit amet consecteur adipisicing elit.</h1>
                    <div className={style.user}>
                        <div className={style.img}>
                            <Image src='/p1.jpeg' alt=''   width={50} height={50} className={style.image}/>
                        </div>
                        <div className={style.username}>
                            <span className={style.username}>Med sekak</span>
                            <span className={style.date}>09-11-23</span>
                        </div>
                    </div>
                </div>
                <div className={style.imgContainer}>
                    <Image src='/p1.jpeg' alt=''   fill className={style.imageContainer}/>
                </div>
            </div>
            <div className={style.content}>
                <div className={style.post}>
                  <div className={style.description}>
                  <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en fauxLe lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux</p>
                    <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en fauxLe lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux</p>
                    <h2>Le lorem ipsum est, en imprimerie</h2>
                    <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en fauxLe lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux</p>
                    <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en fauxLe lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux</p>
                  </div>
                  <div className={style.comments}>
                    <Comment/>
                  </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default page
