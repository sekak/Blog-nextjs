// 'use client'
// import React, { useEffect, useState } from 'react'
// import style from './write.module.css'
// import Image from 'next/image';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import app from '../../utils/firebase'
// import { useRouter } from 'next/router'
import {getAuthSession} from '../../utils/auth'
import { redirect } from 'next/navigation'
import WriteSCR from './WriteSCR'

const Write = async () => {

    const  session   = await getAuthSession();
    const  location   = await getAuthSession();
 
    if(!session)
        redirect('/')
    
    return(
        <div>
            <WriteSCR />
        </div>
    )
}

export default Write
