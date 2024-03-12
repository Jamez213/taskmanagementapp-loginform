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
                    <a href="https://www.facebook.com" target='_blank'><div className='account-icon'><FaFacebook /></div></a>
                    <a href="https://www.google.com" target='_blank'><div className='account-icon'><FaGoogle /></div></a>
                    <a href="https://github.com" target='_blank'><div className='account-icon'><FaGithub /></div></a>
                </div>
            </form>


            <div className='footer'>
            <footer>
                <div class="copyright">
                    <p>&copy; 2024 James Damas. All rights reserved.</p>
                </div>
            </footer>
            </div>
        </div>
    )
}

export default LoginForm