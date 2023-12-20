'use client'

import { useEffect, useState } from "react"
import style from './comment.module.css'
import Image from "next/image"
import { useSession } from "next-auth/react"
import Link from "next/link"
import useSWR from "swr";



const Comment = ({param}) => {
   
    const [desc, setDesc] = useState(null)
    const [click, setClick] = useState(0)
    const { status } = useSession()

    const fetcher = (url) => fetch(url).then((res) => res.json());
    console.log("AUTH URL", process.env.NEXTAUTH_URL)
    const { data , mutate } = useSWR(
        // console.log(`${process.env.NEXTAUTH_URL}/api/comment?postSlug=${param}`)
        `/api/comment?postSlug=${param}`,
        fetcher
    );

    const handleClick = async () => {

        await fetch(`/api/comment?postSlug=${param}`, {
            method: "POST",
            body: JSON.stringify({ desc, postSlug: param }),
        });
        mutate()
        document.getElementById("#id").value = ""
    };

    return (
        <div className={style.container}>
            <h1 className={style.title}>Comments</h1>
            {status === "authenticated" ?
                (<div className={style.write}>
                    <textarea id="#id" onChange={(e) => setDesc(e.target.value)} className={style.textarea} placeholder='Write a comment...' />
                    <input type="submit" className={`${style.button} ${!data && style.block}`} onClick={() => handleClick()} />
                </div>)
                :
                (<Link href='/'>Login to write a comment</Link>)
            }
            {data ? data?.map((item) => (
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
            )) : (<div style={{ marginTop: "100px" }}> No comment yet ... </div>)}
        </div> 
    )
}

export default Comment

