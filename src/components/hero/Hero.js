import React from 'react'
import styles from './hero.module.css'
import  Button  from '../../components/buttons/Button'
import hero from '../../images/hero-img.jpg'

const Hero = () => {
    return (
        <div className='container'>
        {/* hero section start */}
        <div className={styles.hero}>
            <div className='row'>
                <div className='col-5 mt-3'>
                    <h1><span>TAKE</span> CARE OF YOUR <span>EYES</span>, GIVE THEM <span>GOOD</span> LENSES</h1>
                    <hr/>
                    <h5>We develop high technology for lens care</h5>
                    <Button/>
                </div>
                <div className='col-7'>
                    <img src={hero} alt='hero-banner' />
                </div>
            </div>
        </div>
         {/* hero section end */}
    </div>
    )
}

export default Hero
