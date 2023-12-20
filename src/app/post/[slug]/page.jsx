import Comment from '../../../components/comment/Comment'
import Menu from '../../../components/menu/Menu'
import style from './singlepage.module.css'
import Image from 'next/image'


const getData = async (params) => {
    // console.log("Sddddddd",params)
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${params}`, { cache: "no-store" })
    if (!res.ok)
        throw new Error("Something is went wrang");
    return res.json()
}




const page = async ({ params }) => {
    const param = params.slug
    const data = await getData(param)


    return (
        <div className={style.container}>
            <div className={style.infoContainer}>
                <div className={style.textContainer}>
                    <h1 className={style.title}>{data.title}</h1>
                    <div className={style.user}>
                        <div className={style.img}>
                            <Image src={data.user.image} alt='' width={50} height={50} className={style.image} />
                        </div>
                        <div className={style.username}>
                            <span className={style.username}>{data.user.name}</span>
                            <span className={style.date}>{data.createAt}</span>
                        </div>
                    </div>
                </div>
                <div className={style.imgContainer}>
                    {data.img && <Image src={data.img} alt='' fill className={style.imageContainer} />}
                </div>
            </div>
            <div className={style.content}>
                <div className={style.post}>
                    <div className={style.description} dangerouslySetInnerHTML={{ __html: data?.desc }} />
                    <div className={style.comments}>
                        <Comment param={param} />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default page
