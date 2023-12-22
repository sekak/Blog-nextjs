'use client'
import React, { useEffect, useState } from 'react'
import style from './write.module.css'
import Image from 'next/image';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from '../../utils/firebase'
import { useRouter } from 'next/router'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import 'transition-style';


const WriteSCR = () => {


    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [file, setFile] = useState(null)
    const [media, setMedia] = useState("")
    const [title, setTitle] = useState("")
    const [type, setType] = useState(null)
    const [error, setError] = useState(false)
    
    useEffect(() => {
        const upload = () => {
            const storage = getStorage(app)
            const storageRef = ref(storage, file?.name);
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
    console.log(type)
    const handleClick = async (e) => {
        if (!type || title == "" || !value) {
            setError(true);
            return null;
        }
        e.preventDefault()
        await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
                title,
                img: media,
                desc: value,
                catSlug: type,
                slug: str(title)
            })
        })
        window.location.reload()
    }

    useEffect(() => {
        setTimeout(() => { setError(false) }, 8000)
    }, [error])

    return (
        <div className={style.container}>
            <input type='text' placeholder='Title' className={style.title} eform="Wrong filetype:file:0:Supported filetypes are pdf, txt and doc:#LIST pdf,txt,doc" onChange={(e) => setTitle(e.target.value)} />
            <div className={style.editor}>
                <div type="text" className={style.TextIn}>
                    <label>Choose a type: </label>
                    <select id="types" name='types' defaultValue="travel" required onChange={(e) => (setType(e.target.value))} className={style.select}>
                        <option value="travel"  >Travel</option>
                        <option value="culture">Culture</option>
                        <option value="food">Food</option>
                        <option value="fashion">Fashion</option>
                    </select>
                </div>
                <button className={style.button} onClick={() => setOpen(!open)}>
                    <Image className={style.img} src='/plus.png' alt='' width={30} height={30} />
                </button>
                {
                    open &&
                    <div className={style.buttons}>
                        <input type='file' id='image' accept="image/*" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} />
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
            {file && <div className={style.showImg}><Image src={media} id="#blah" alt='' className={style.imgShow} /></div>}
            <ReactQuill className={style.reactquill} theme="snow" value={value} onChange={setValue} placeholder='Tell your story...' />
            <button type='submit' className={style.post} onClick={(e) => handleClick(e)}>Publish</button>
            {error &&
                    <div transition-style="in:wipe:left" className="warning">
                        <Stack sx={{ width: '100%'  }} spacing={2}>
                            <Alert severity="error">This is an error alert — check it out!</Alert>
                        </Stack>
                    </div>}
        </div>
    )
}

export default WriteSCR
