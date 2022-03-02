import React from 'react'
import hero_banner from '../../images/hero_banner.jpg'
import styles from './home.module.css'
import Hero from '../../components/hero/Hero'
import Card from '../../components/card/Card'
import Womens from '../../components/categories/Womens'
import Electronics from '../../components/categories/Electronics'
import Jewelery from '../../components/categories/Jewelery'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <Hero />

            {/* categories section start */}
            <section className={styles.category}>
                <div className='container'>
                    <div className='row mt-4'>
                        <Link to={`/details/men's clothing`}>   <h3>MENS'S CLOTHING</h3></Link>
                        <Card />
                    </div>
                </div>

            </section>
            <hr />
            <section className={styles.category}>
                <div className='container'>
                    <div className='row mt-4'>
                        <Link to={`/details/women's clothing`}> <h3>WOMEN'S CLOTHING</h3></Link>
                        <Womens />
                    </div>
                </div>
            </section>

            {/* banner section start */}
            <section className={styles.banner}>
                <img src={hero_banner} alt='hero_banner' className='img-fluid' />
            </section>

            {/* latest products section start */}
            <section className={styles.category}>
                <div className='container'>
                    <div className='row mt-4'>
                        <Link to={`/details/electronics`}><h3>ELECTRONICS</h3></Link>
                        <Electronics />
                    </div>
                </div>
            </section>
            <hr />
            <section className={styles.category}>
                <div className='container'>
                    <div className='row mt-4'>
                        <Link to={`/details/jewelery`}> <h3>JEWELERY</h3></Link>
                        <Jewelery />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
