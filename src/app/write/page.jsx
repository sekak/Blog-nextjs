'use client'
import React, { useState } from 'react'
import style from './write.module.css'
import Image from 'next/image';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const Write = () => {
    
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    return (
        <div className={style.container}>
            <input type='text' placeholder='Title' className={style.title}/>
            <div className={style.editor}>
                <button className={style.button} onClick={() => setOpen(!open)}>
                    <Image className={style.img} src='/plus.png' alt='' width={30} height={30} />
                </button>
                {
                    open &&
                    <div className={style.buttons}>
                        <button className={style.addButton}>
                            <Image className={style.img} src='/image.png' alt='' width={30} height={30} />
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
            <ReactQuill className={style.reactquill} theme="snow" value={value} onChange={setValue} placeholder='Tell your story...'/>
            <button className={style.post}>Publish</button>
        </div>
    )
}

export default Write
