import React from 'react'
import about_usbanner from '../../images/about_usbanner.jpg'
import styles from './about.module.css'

const About = () => {
    return (
        <div className={styles.about}>
             <img src={about_usbanner} alt='banner' style={{width:'100%',height:'355px'}}/>
             <div className='container'>
                    <h3 className={styles.who}>WHO WE ARE</h3>
                    <div className={styles.row_about}>
                            <div className={styles.about_data}>
                                <h3> Choose </h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing 
                                    and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s.
                                    </p>
                            </div>
                            <div className={styles.about_data}>
                                <h3> Select </h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing 
                                    and typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s.
                                    </p>
                            </div>
                            <div className={styles.about_data}>
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
