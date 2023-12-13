'use client'
import { useParams, useRouter } from 'next/navigation'
import style from './pagination.module.css'
import { useEffect, useState } from 'react'



const Pagination = ({ page, count, cat ,data}) => {
  const href = window.location.href.split('/')[3].split('?')[0]
  const ref = window.location.href.split('/')[3].split('&')[0]
  const route = useRouter()

  const PER_LENGTH_PAGE = 2 // how cart want to show in front
  const manyStep = Math.ceil(count / PER_LENGTH_PAGE) // how step can do it  
  const [step, setSteps] = useState(1) // first step
  const [block, setBlock] = useState(false)
  const [block1, setBlock1] = useState(false)
  const [name, setName] = useState("")

  console.log(ref)

  useEffect(() => {
       if (href == "blog" && name == "prev" && data) {
        console.log("prev blog right")
        step == 1 ? setBlock(true) : setBlock(false);
        setBlock1(false)
        step != 1 && route.push(`/${ref}&page=${step - 1}`)
        step != 1 && setSteps(step - 1);
      }
      else if (href != "blog" && name == "prev" && data) { // prev // no blog // right
        console.log("prev no blog left")
        step == 1 ? setBlock(true) : setBlock(false);
        setBlock1(false)
        step != 1 && route.push(`/?page=${step - 1}`)
        step != 1 && setSteps(step - 1);
      }
      else if (href == "blog" && name == "next" && data) // next //  blog // right
      {
        console.log("manyStep")
        step != manyStep && route.push(`/${ref}&page=${step + 1}`)
        step == manyStep - 1 ? setBlock1(true) : setBlock1(false);
        step != manyStep && setSteps(step + 1);
      }
      else if (href != "blog" && name == "next" && data) { // next // no blog // right
        console.log("next right no blog")
        console.log(manyStep)
        step == manyStep - 1 ? setBlock1(true) : setBlock1(false);
        setBlock(false)
        step != manyStep && route.push(`/?page=${step + 1}`)
        step != manyStep && setSteps(step + 1);
      }
      setName("")

  }, [href, name])



  return (
    <div className={style.container}>
       <button disabled={block} className={`${style.button} ${block && style.block} ${!data && style.block}`} onClick={() => setName("prev")}>Previous</button>
       <button disabled={block1} className={`${style.button} ${block1 && style.block} ${!data && style.block}`} onClick={() => setName("next")}>Next</button>
     </div>
  )
}

export default Pagination
