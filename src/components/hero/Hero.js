import React from 'react'
import styles from './hero.module.css'
import  Button  from '../../components/buttons/Button'
import hero from '../../images/hero-img.jpg'
import { Link } from 'react-router-dom'


const Hero = () => {
    return (
        <div className='container'>
        {/* hero section start */}
        <div className={styles.hero}>
            <div className='row'>
                <div className='col-12 col-md-5 mt-3' id={styles.hero_text}>
                    <h1><span>TAKE</span> CARE OF YOUR <span>EYES</span>, GIVE THEM <span>GOOD</span> LENSES</h1>
                    <hr/>
                    <h5>We develop high technology for lens care</h5>
                    <Link to='/products'>  
                        <Button label='OUR PRODUCTS' />
                    </Link>
                </div>
                <div className='col-12 col-md-7' id={styles.hero_img} >
                    <img src={hero} alt='hero-banner' className='img-fluid'/>
                </div>
            </div>
        </div>
         {/* hero section end */}
    </div>
    )
}

export default Hero
