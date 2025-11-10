import { useParams } from "react-router-dom"
import {cards} from "../../data.js"
import styles from './SingleCard.module.scss'

const SingleCard = () => {
  const {id} = useParams();
  const info = cards.find(s => s.index == (id || 0))
  return (
    <section className={styles.single_card}>
      <img src={info.img} alt="" />
      <div>
        <h2>{info.title}</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, aliquam maxime ipsum alias non sed cumque quasi necessitatibus natus reprehenderit quis quos sapiente repellendus voluptas cum nisi deserunt! Delectus commodi, repellendus alias, vel magnam voluptatem hic esse molestiae temporibus officiis doloribus, maiores culpa! Quisquam voluptates illum blanditiis dignissimos reprehenderit, doloremque nihil similique incidunt exercitationem porro totam natus ab ipsum earum soluta, consectetur eum assumenda. Laudantium obcaecati dolore quaerat corrupti reprehenderit amet a, fuga est officia! Quas excepturi itaque quae dolorem sed distinctio delectus, perferendis iusto est iste, illo officiis, id odio expedita! Assumenda accusamus saepe consequatur rerum! Adipisci, nisi rem!
        </p>
        <p>{info.price}</p>
      </div>
    </section>
  )
}

export default SingleCard