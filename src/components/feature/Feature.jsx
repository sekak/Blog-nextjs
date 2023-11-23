import Image from 'next/image'
import style from './feature.module.css'

const Feature = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>
        <b>Hey, med dev here!</b> Discover my github and portfolio.
      </h1>
      <div className={style.post}>
        <div className={style.imgContainer}>
          <Image className={style.image} src='/p1.jpeg' alt='p1' fill/>
        </div>
        <div className={style.textContainer}>
          <h1  className={style.postTitle}>lorem ipsum dolor sit amet alim consecteur adipicing alut.</h1>
          <p  className={style.postDesciption}>
            lorem uosum dolor sit, amer consectetur adipicinf ekut,
            Cupiitate, quam nisi mafni ea laborum inventore voluptatum 
            laudantuim repellatt ducims unde ascpenature fuga.
          </p>
          <button  className={style.button}>Read More</button>
        </div>
      </div>
    </div>
  )

}

export default Feature
