import React from 'react';
import './LoginForm.css';
import { FaUserCircle, FaLock,FaFacebook, FaGoogle, FaGithub, } from "react-icons/fa";



const LoginForm = () => {
    return (
        <div className= 'wrapper'>
            <form action= "">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='Username' required />
                    <FaUserCircle className='icon' />
                </div>
                <div className="input-box">
                    <input type="password" placeholder='Password' required />
                    <FaLock className='icon' />
                    
                    
                </div>

                <div className="remember-forgot">
                    <label>
                        <input type='checkbox'/>Remember me </label>
                        <a href='#'>Forgot Password?</a>
                </div>

                <button type='submit'>Login</button>

                <div className="register-link">
                    <p> Don't have an account? <a href='#'>Register</a></p>
                </div>

                <div className='account-register'> 
                        <div className='account-icon'><FaFacebook/></div>
                        <div className='account-icon'><FaGoogle /></div>
                        <div className='account-icon'><FaGithub /></div>
                </div>
            </form>

        </div>
    )
}

export default LoginForm