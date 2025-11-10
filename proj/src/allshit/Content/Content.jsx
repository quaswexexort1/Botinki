import {Link} from 'react-router-dom';
import styles from './Content.module.scss'
import Storonka from './storonka.jsx'
import {cards} from "../../data.js"
import arrow from '../../assets/PHOTOFOOTER/arrow.png'


const Card = ({img, title, price, index}) => {
  return (
    <div className={styles.card}>
      
        <div className={styles.card_img}>
            <div>Sale</div>
            <img src={img} alt="" />
        </div>
        <div className={styles.card_text}>
            <h6>{title}</h6>
            <p>{price}</p>
            
            <button>
              <Link to={`${index}`}> 
                Add to cart
              </Link>
           </button>
        </div>
    </div>
  )
}

const Content = () => {
  
  const sneakers_cards = cards.map((item)=>
  <li>
    <Card title={item.title} img={item.img} price={item.price} index={item.index}/>
  </li>)

  return (
    <section className={styles.content_section}>
        <div className={styles.left_side}>
             <div className={styles.searching}>
                <p>Showing 1-12 Of 15 Results</p>
                <form>
                <select >
                  <option value="">Default Sorting</option>
                  <option value="">Custom Sorting</option>
                </select>
              </form>
            </div>
            <ul>
               {sneakers_cards}
            </ul>
            <div className={styles.pages}>
              <div className={styles.pages_btns}>
                  <button className={styles.btn_red}>1</button>
                  <button className={styles.btn_white}>2</button>
              </div>
              <button>
                <p>next</p>
                <img src={arrow} alt="" />
              </button>
            </div>
        </div>
       
        <Storonka/>
    </section>
  )
}



export default Content