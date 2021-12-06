import React from 'react'
import styles from './button.module.css'

const Button = (props) => {
    return (
        <div>
             <button className={styles.getbtn} onClick={props.onClick}>{props.label}</button>
        </div>
    )
}

export default Button
