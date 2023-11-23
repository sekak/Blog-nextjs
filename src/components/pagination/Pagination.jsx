'use client'
import { useParams, useRouter } from 'next/navigation'
import style from './pagination.module.css'
import { useEffect, useState } from 'react'

const localStorageItem =()=>{
  return localStorage.getItem("value")  || 1 
}

const Pagination = ({ page, count ,cat}) => {
  const href = window.location.href.split('/')[3].split('?')[0]
  const ref = window.location.href.split('/')[3].split('&')[0]
   const route = useRouter()
  const PER_LENGTH_PAGE = 2
  const manyStep = Math.ceil(count / PER_LENGTH_PAGE)
  const [step, setSteps] = useState(parseInt(localStorageItem()) || 1)
  const [block, setBlock] = useState(()=>{
    if( parseInt(localStorageItem()) === 1)
       return true
  })
  const [block1, setBlock1] = useState(false)


  const handleClick = (type) => {
    if(type === "prev" && step > 1)
    {
       setSteps(step - 1)
      if(href !== 'blog')
      route.push(`/?page=${step - 1}`)
      else if(href === 'blog')
      {
        console.log("im here ")
        route.push(`/${ref}&page=${step - 1}`)
      }
      setBlock1(false)
       setBlock(false)
      if(step == 2)
        setBlock(true)

    }
    else if(type === "next" && step < manyStep)
    {
      setSteps(step +1)
      if(href !== 'blog')
        route.push(`/?page=${step + 1}`)
      else
      route.push(`/${ref}&page=${step + 1}`)

      setBlock1(false)
      setBlock(false)
     if(step == manyStep - 1)
       setBlock1(true)
    }
}

useEffect(()=>{
  localStorage.setItem("value",step);
},[step])
  return (
    <div className={style.container}>
      <button disabled={block} className={`${style.button} ${block && style.block}`} onClick={() => handleClick("prev")}>Previous</button>
      <button disabled={block1} className={`${style.button} ${block1 && style.block}`} onClick={() => handleClick("next")}>Next</button>
    </div>
  )
}

export default Pagination
