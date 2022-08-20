import React, { useState } from 'react';
import useLocalStorage from 'use-local-storage';
import './App.css';

import { BsGoogle, BsFacebook, BsLinkedin, BsTwitter, BsApple } from "react-icons/bs";
import usePasswordToggle from './usePasswordToggle';


function App() {


  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme)
  }

  const [PasswordInputType, ToggleIcon] = usePasswordToggle()  

  return (
    <section className="app" data-theme={theme}>
      <div className="login">
        <h1>Login Form</h1>
        <div className="container">
          <div className="top">
            <BsGoogle className='icon' />
            <BsFacebook className='icon' />
            <BsLinkedin className='icon' />
            <BsTwitter className='icon' />
            <BsApple className='icon' />
          </div>
          <p className="divider"><span>Or</span></p>
          <form>
            <label>Email</label>
            <input type="email" placeholder='Enter your Email' required />
            <label>Password</label>
            <div className="password">
              <input type={PasswordInputType} placeholder='Enter your Password' required />
              <span className="password-toggle">
                { ToggleIcon }
              </span>
            </div>
            <div className="remember">
              <input type="checkbox" />
              <p>Remember Me</p>
            </div>
            <button>Login</button>
          </form>
          <div className="bottom">
            <p>Forget your Password?</p>
            <a href="/">Reset Password</a>
          </div>
          <p className="create">Create Account</p>
        </div>
        <div onClick={changeTheme} className="theme-toggle">
            <div>
              {theme === 'light' ? '🌙' : '☀️'}
            </div>
        </div>
      </div>
    </section>
  );
}

export default App;
