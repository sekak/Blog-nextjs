import Image from 'next/image'
import style from './card.module.css'
import Link from 'next/link'

const Card = ({ item }) => {
    return (
        <div className={style.container}>
           {item?.img && <div className={style.imgContainer}>
                <Image className={style.img} src={item?.img} alt='' fill />
            </div>}
            <div className={style.textContainer}>
                <div className={style.details}>
                    <span className={style.date}>11.02.2023 - </span>
                    <span className={style.category}>{item.catSlug}</span>
                </div>
                <Link className={style.title} href={`/post/${item.slug}`}>{item.title}</Link>
                <p className={style.description} dangerouslySetInnerHTML={{ __html: item?.desc.substring(0,60) }}/>
                <Link className={style.button} href={`/post/${item.slug}`}>Read More</Link>
            </div>
        </div>
    )
}

export default Card
