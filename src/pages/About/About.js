import React from 'react'
import aboutUs from '../../images/aboutUs.jpg'
import styles from './about.module.css'

const About = () => {
    return (
        <div className={styles.about}>
            <div className={styles.banner}>
             <img src={aboutUs} alt='banner' className='img-fluid' />
             </div>
             <div className='container'>
                    <h2>About Us</h2>
                    <div className={styles.about_text}>
                        <h3>WHO WE ARE</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s.
                            Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
                    <div className='row justify-content-center'>
                            <div className='col-12 col-md-3' id={styles.about_data}>
                                <h3> Choose </h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing 
                                    and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s.
                                    </p>
                            </div>
                            <div className='col-12 col-md-3' id={styles.about_data}>
                                <h3> Select </h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing 
                                    and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s.
                                    </p>
                            </div>
                            <div className='col-12 col-md-3' id={styles.about_data}>
                                <h3> Delever </h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing 
                                    and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s.
                                    </p>
                            </div>
                        </div>
                        
             </div>
        </div>
    )
}

export default About
