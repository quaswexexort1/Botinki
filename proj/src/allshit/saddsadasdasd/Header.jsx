import React from 'react'
import facebook from "../../assets/PHOTOHEADER/facebook.svg"
import instagram from "../../assets/PHOTOHEADER/instagram.svg"
import logo from "../../assets/PHOTOHEADER/logo.svg"
import search from "../../assets/PHOTOHEADER/search.svg"
import shopping_cart from "../../assets/PHOTOHEADER/shopping-cart.svg"
import twitter from "../../assets/PHOTOHEADER/twitter.svg"
import user from "../../assets/PHOTOHEADER/user.svg"

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header>
        <div className={styles.top_header}>
            <ul>
                <li> <img src={facebook} alt="" /></li>
                <li> <img src={twitter} alt="" /></li>
                <li> <img src={instagram} alt="" /></li>
            </ul>
             <img src={logo} alt="" />
             <ul>
                <li> <img src={search} alt="" /></li>
                <li> <img src={user} alt="" /></li>
                <li> <img src={shopping_cart} alt="" /></li>
            </ul>
        </div>
        <div className={styles.create_line}></div>
        <nav>
            <ul>
                 <li>Home</li>
                <li>Shop</li>
                <li>Products</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul> 
        </nav>
    </header>
  )
}

export default Header