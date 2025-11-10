import styles from './Content.scss'
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

export default Little_card