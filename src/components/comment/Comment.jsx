import Link from 'next/link';
import style from './comment.module.css'
import Image from 'next/image';


const Comment = () => {
    const status = "authenticated";
    return (
        <div className={style.container}>
            <h1 className={style.title}>Comments</h1>
            {status === "authenticated" ?
                (<div className={style.write}>
                    <textarea className={style.textarea} placeholder='Write a comment...' />
                    <button className={style.button}>Send</button>
                </div>)
                :
                (<Link href='/'>Login to write a comment</Link>)
            }
            <div className={style.comments}>
                <div className={style.comment}>
                    <div className={style.user}>
                        <Image src="/p1.jpeg" alt='' width={50} height={50} className={style.image}/>
                        <div className={style.infoUser}>
                            <span className={style.username}>Med sekak</span>
                            <span className={style.date}>09-11-23</span>
                        </div>
                    </div>
                    <p className={style.description}>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement</p>
                </div>

                <div className={style.comment}>
                    <div className={style.user}>
                        <Image src="/p1.jpeg" alt='' width={50} height={50} className={style.image}/>
                        <div className={style.infoUser}>
                            <span className={style.username}>Med sekak</span>
                            <span className={style.date}>09-11-23</span>
                        </div>
                    </div>
                    <p className={style.description}>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement</p>
                </div>

                <div className={style.comment}>
                    <div className={style.user}>
                        <Image src="/p1.jpeg" alt='' width={50} height={50} className={style.image}/>
                        <div className={style.infoUser}>
                            <span className={style.username}>Med sekak</span>
                            <span className={style.date}>09-11-23</span>
                        </div>
                    </div>
                    <p className={style.description}>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement</p>
                </div>

                <div className={style.comment}>
                    <div className={style.user}>
                        <Image src="/p1.jpeg" alt='' width={50} height={50} className={style.image}/>
                        <div className={style.infoUser}>
                            <span className={style.username}>Med sekak</span>
                            <span className={style.date}>09-11-23</span>
                        </div>
                    </div>
                    <p className={style.description}>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement</p>
                </div>
            </div>
        </div>
    )
}

export default Comment
