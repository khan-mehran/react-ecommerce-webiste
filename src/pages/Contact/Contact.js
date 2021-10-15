import React from 'react'
import contactbanner from '../../images/contactbanner.jpg'
import styles from './contact.module.css'

const Contact = () => {
    return (
        <div>
            <img src={contactbanner} alt='contact' style={{width:'100%',height:'355px'}}/>
             <div className='container'>
                <div className='row  mt-5'>
                    <div className='col-7 py-5'>
                        <h3> Company Details </h3>
                            <p>Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s.
                            Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s.
                            Lorem Ipsum is simply dummy text of the printing 
                            and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s.
                            </p>
                            <h5>Contact Info</h5>
                            <p>PHONE: Toll Free (123) 456-7890</p>
                            <p>EMAIL: mail@ecommerce.com</p>
                            <p>ADDRESS: 123 Street Name, City, Pakistan</p>
                    </div>
                    <div className="col-5">
                        <div className={styles.login_wrap}>
                            <div className={styles.login}>
                                <h3>STAY IN TOUCH</h3>
                                <input type='text' id={styles.input} name='Name'  placeholder='Enter Your Name...' />
                                <input type='text' id={styles.input} name='Email' placeholder='Enter Your Email...' />
                                <input type='text' id={styles.input} name='msg' placeholder='Enter Your Message...' />
                                <button>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    )
}

export default Contact
