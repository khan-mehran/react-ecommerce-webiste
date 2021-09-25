import React from 'react'
import {Link } from 'react-router-dom';
import styles from './header.module.css'
import logo from '../../images/logo.png'
import { FaOpencart } from "react-icons/fa";
import Cart from './cart'

export const Header = () => {
    return (
        <div>
            {/* <Router> */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <Link className="navbar-brand" to='/'><img src={logo} style={{height:'70px', width:'120px'}}/></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className={`nav-link ${styles.nav}`} aria-current="page" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className={`nav-link ${styles.nav}`} aria-current="page" to='/products'>Products</Link>
                            </li>
                            <li className="nav-item">
                            <Link className={`nav-link ${styles.nav}`} to='/about'>About</Link>
                            </li>
                            <li className="nav-item">
                            <Link className={`nav-link ${styles.nav}`} to='/contact'>Contact</Link>
                            </li>
                        </ul>
                            <button className={styles.cart}>
                                <Cart/>
                            {/* <FaOpencart style={{color: 'white'}} /> */}
                            </button>
                            <button class="btn btn-outline-danger" type="submit">GET IT NOW</button>
                        </div>
                    </div>
                </nav>
               
            {/* </Router> */}
        </div>
    )
}