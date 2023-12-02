'use client'

import { useEffect, useState } from "react"
import style from './comment.module.css'
import Image from "next/image"
import { useSession } from "next-auth/react"
import Link from "next/link"
import useSWR from "swr";



const Comment = () => {
    const params = window.location.pathname.split('/')[2]
    // console.log(params)
    // const [data, setData] = useState([])
    const [desc, setDesc] = useState(null)
    const [click, setClick] = useState(0)
    const { status } = useSession()
    
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data ,mutate} = useSWR(
        `http://localhost:3000/api/comment?postSlug=${params}`,
        fetcher
    );


    const handleClick = async () => {
        
        await fetch(`http://localhost:3000/api/comment?postSlug=${params}`, {
            method: "POST",
            body: JSON.stringify({ desc, postSlug:params }),
        });
        mutate()
        document.getElementById("#id").value = ""
    };
    console.log(data)
    return (
        <div className={style.container}>
            <h1 className={style.title}>Comments</h1>
            {status === "authenticated" ?
                (<div className={style.write}>
                    <textarea id="#id" onChange={(e) => setDesc(e.target.value)} className={style.textarea} placeholder='Write a comment...' />
                    <input type="submit" className={style.button} onClick={() => handleClick()} />
                </div>)
                :
                (<Link href='/'>Login to write a comment</Link>)
            }
            {data?.toReversed().map((item) => (
                <div className={style.comments} key={item.id}>
                    <div className={style.comment}>
                        <div className={style.user}>
                            {item.user && item.user.image && <Image src={item.user?.image} alt='' width={50} height={50} className={style.image} />}
                            <div className={style.infoUser}>
                                {item.user && <span className={style.username}>{item.user.name}</span>}
                                <span className={style.date}>09-11-23</span>
                            </div>
                        </div>
                        <p className={style.description}>{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Comment

