import React from 'react'
import styles from './error.module.css'

const Error = () => {
    return (
        <div className='row bg-dark'>
            <div className='container'>
                <div className={styles.error_text}>
                <h5>Oops<span>!</span></h5>
                <h5>Error 4<span>0</span>4</h5>
                <h2>Page Not Found<span>...</span></h2>  
                </div>
            </div>
        </div>
    )
}

export default Error
