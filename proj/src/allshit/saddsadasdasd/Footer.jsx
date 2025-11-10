import styles from './Footer.module.scss'
import img_1 from "../../assets/footer_icons/img_1.png"
import img_2 from "../../assets/footer_icons/img_2.png"
import img_3 from "../../assets/footer_icons/img_3.png"
import img_4 from "../../assets/footer_icons/img_4.png"
import phone from "../../assets/footer_icons/phone.png"
import mail from "../../assets/footer_icons/mail.png"
import time from "../../assets/footer_icons/time.png"
import map from "../../assets/footer_icons/map-pin.png"

const Footer = () => {
  return (
    <footer>
      <div className={styles.top_header}>
        <div>
            <h4>Popular today</h4>
            <ul>
                <li>
                  <img src={img_1} alt="" />
                  <p>Velit nisl sodales eget 
                  donec quis. volutpat orci.</p>
                </li>
                <li>
                  <img src={img_2} alt="" />
                  <p>Dolor eu varius. Morbi 
                    fermentum velit nisl.</p>
                </li>
                <li>
                  <img src={img_3} alt="" />
                  <p>Malesuada fames ac ante 
                  ipsum primis in faucibus. </p>
                </li>
                <li>
                  <img src={img_4} alt="" />
                  <p>Nisl sodales eget donec 
    quis. volutpat orci. </p>
                </li>

            </ul>
        </div>
       
      </div>
      <div className={styles.bottom_header}>
        <div className={styles.left_header}>
             <div className={styles.lists_header}>
                    <ul>
                      <li><b>About Us</b></li>
                      <li>Organisation </li>
                      <li>Partners</li>
                      <li>Clients</li>
                    </ul>
                    <ul>
                      <li><b>Interesting Links</b></li>
                      <li>Photo Gallery</li>
                      <li>Our Team</li>
                      <li>Socials</li>
                    </ul>
                    <ul>
                      <li><b>Achievements</b></li>
                      <li>Winning Awards</li>
                      <li>Partners</li>
                      <li>Our Amazing Clients</li>
                    </ul>
              </div>
              <div className={styles.text_header}>
                    <h4>Shipping Information</h4>
                    <p>Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec nibh 
                      rhoncus varius in non lorem. Donec interdum, lectus in convallis pulvinar, enim elit porta sapien, 
                      vel finibus erat felis sed neque. Etiam aliquet neque sagittis erat tincidunt aliquam. 
                    </p>
              </div>
        </div>
        <div className={styles.right_header}>
              <div className={styles.text_header}>
                <h4>Contact Us</h4>
                <p>
                  Bendum dolor eu varius. Morbi fermentum velitsodales 
                  egetonec. volutpat orci. Sed ipsum felis, tristique
                  egestas et, convallis ac velitn consequat nec luctus.
                </p>
              </div>
              <ul>
                <li>
                  <img src={phone} alt="" />
                  <p>Phone: (+63) 236 6322 </p>
                </li>
               
                <li>
                  <img src={mail} alt="" />
                  <p>public@news.com</p>
                </li>
                 <li>
                  <img src={time} alt="" />
                  <p>Mon - Fri: 10am - 6pm
                    <br />
                    Sat - Sun: 10am - 6pm </p>
                </li>
                <li>
                  <img src={map} alt="" />
                  <p>639 Jade Valley,
                    <br />
                     Washington Dc </p>
                </li>
              </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer