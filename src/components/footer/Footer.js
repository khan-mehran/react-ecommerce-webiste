import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import styles from './footer.module.css'

const Footer = () => {
    return (
        <>
            <footer>
              <section className={styles.footer}>
                  <div className='container'>
                    <div className='row' >
                        <Link className="navbar-brand" to='/'><img src={logo} style={{height:'70px', width:'120px'}}/></Link>
                        <div className='col-4'>
                            <h5>Contact Info</h5>
                            <p>PHONE: Toll Free (123) 456-7890</p>
                            <p>EMAIL: mail@ecommerce.com</p>
                            <p>ADDRESS: 123 Street Name, City, Pakistan</p>
                        </div>
                        <div className='col-4'>
                            <h5>Quick Links</h5>
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
                        </div>
                        <div className='col-4'>
                            <h5>Company Details</h5>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                        </div>
                    </div>
                    <hr/>
                    <div className={styles.copy_right}>
                        <p>Mehran Khan © 2021. All Rights Reserved</p>
                    </div>
                  </div>
              </section>
          </footer>
        </>
    )
}

export default Footer
