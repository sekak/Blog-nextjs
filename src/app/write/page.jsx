'use client'
import React, { useEffect, useState } from 'react'
import style from './write.module.css'
import Image from 'next/image';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from '../../utils/firebase'



const Write = () => {



    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [file, setFile] = useState(null)
    const [media, setMedia] = useState("")
    const [title, setTitle] = useState("")
    const storage = getStorage(app)
    console.log(file)
    console.log(value)
    console.log(title)
    useEffect(() => {
        const upload = () => {
            const storageRef = ref(storage, new Date().getDate + file?.name);
            const montainRefImage = ref(storage, `images/${file?.name}`);
            uploadBytes(storageRef, file).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            });
            getDownloadURL(storageRef).then((downloadURL) => {
                setMedia(downloadURL)
            });
        }
        file && upload()
    }, [file])
    const str = (title) => title.toLocaleLowerCase().replace(" ", "-")

    const handleClick = async (e) => {
        e.preventDefault()
        await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
                title,
                img: media,
                desc: value,
                catSlug: "travel",
                slug: str(title)
            })
        })
    }
    return (
        <div className={style.container}>
            <input type='text' placeholder='Title' className={style.title} eform="Wrong filetype:file:0:Supported filetypes are pdf, txt and doc:#LIST pdf,txt,doc" onChange={(e) => setTitle(e.target.value)} />
            <div className={style.editor}>
                <button className={style.button} onClick={() => setOpen(!open)}>
                    <Image className={style.img} src='/plus.png' alt='' width={30} height={30} />
                </button>
                {
                    !open &&
                    <div className={style.buttons}>
                        <input type='file' id='image' style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
                        <button className={style.addButton}>
                            <label htmlFor='image' >
                                <Image className={style.img} src='/image.png' alt='' width={30} height={30} />
                            </label>
                        </button>
                        <button className={style.addButton}>
                            <Image className={style.img} src='/external.png' alt='' width={30} height={30} />
                        </button>
                        <button className={style.addButton}>
                            <Image className={style.img} src='/video.png' alt='' width={30} height={30} />
                        </button>
                    </div>
                }
            </div>
            {file && <div className={style.showImg}><img src={media} id="#blah" className={style.imgShow} /></div>}
            <ReactQuill className={style.reactquill} theme="snow" value={value} onChange={setValue} placeholder='Tell your story...' />
            <button className={style.post} onClick={(e) => handleClick(e)}>Publish</button>
        </div>
    )
}

export default Write
