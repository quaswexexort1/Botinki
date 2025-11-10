import {little_cards_2, little_cards} from "../../data.js"
import styles from './Content.module.scss'
import star from "../../assets/star.png"
import star_grey from "../../assets/star_grey.png"


const Little_card = ({title, price, rating=0, img}) => {
  let stars = [];
  if(rating!=0){
    for(let i =0; i<5; i++){
      if(rating>i){
        stars.push(<li>
        <img src={star} alt="" />
      </li>)
      }
      else{
         stars.push(<li>
        <img src={star_grey} alt="" />
      </li>)
      }
     
    }
  }
  return (
    <div className={styles.little_card}>
        <img src={img} alt="" className={styles.img_card}/>
        <div>
            <h5>{title}</h5>
            <ul>
              {stars}
            </ul>
            <p>{price}</p>
        </div>
    </div>
  )
}

const Storonka = () => {
  const ul_1 = little_cards.map(item => 
    <li>
      <Little_card title={item.title} price={item.price} rating={item.rating} img={item.img}/>
    </li>
  )
  const ul_2 = little_cards_2.map(item => 
    <li>
      <Little_card title={item.title} price={item.price} rating={item.rating} img={item.img}/>
    </li>
  )
  return (
    <div className={styles.sidebar_content}>
      <form className={styles.search}>
        <input type="text" placeholder="  Search Models" />
      </form>
      <div>
        <h4>Top Best Models</h4>
        <ul>
          {ul_1}
        </ul>
        <h4>You May Like</h4>
        <ul>
           {ul_2}
        </ul>
      </div>
    </div>
  )
}

export default Storonka