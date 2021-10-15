import React, { useState } from 'react'
import styles from './login.module.css'
import { useHistory } from 'react-router-dom'

const Login = () => {

    const history = useHistory();
    const [user, setUser] = useState({
        name:'',
        pass:''
    })
const handleChange=(e) => {
    const  {name,value}=e.target; 
    setUser({...user,[name]:value})
}
const handleSubmit=() => {
    console.log(user);
    if(user.name==='mehran' && user.pass==='website@123')
    {
        history.push('/')
    }
    else{
        alert('Wrong Email or Password')
    }
}
    return (
        <div className={styles.login_wrap}>
            <div className={styles.login}>
                <h3>LOGIN NOW!</h3>
                <input type='text' id={styles.input} name='name' value={user.name} onChange={handleChange} placeholder='Enter Your Email...' />
                <input type='password' id={styles.input} name='pass' value={user.pass} onChange={handleChange} placeholder='Enter Your password...' />
                <button onClick={handleSubmit}>SUBMIT</button>
            </div>
        </div>
    )
}

export default Login
