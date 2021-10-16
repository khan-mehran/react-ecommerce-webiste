import React from 'react'
import contact from '../../images/contact.jpg'
import styles from './contact.module.css'

const Contact = () => {
    return (
        <div>
            <img src={contact} alt='contact' className='img-fluid' />
             <div className='container'>
                <div className='row  mt-5'>
                    <div className='col-12 col-lg-7 col-md-6 py-5'>
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
                    <div className="col-12 col-lg-5 col-md-6">
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
