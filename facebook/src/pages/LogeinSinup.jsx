import React from 'react'
import './Login.css'
const LogeinSinup =()=> {
  return (
    <div className='login'>
      <div className="login-container">
        <h1>Sign up</h1>
        <div className="login-filds">
          <input type="text" placeholder='enter your name'/>
          <input type="email" placeholder='enter your email'/>
          <input type="password" placeholder='enter your password'/>
        </div>
        <button>Continue</button>
        <p className="login-login">
          already have an account? <span>Login here</span>
        </p>
        <div className="login-agree">
          <input type="checkbox" name='' id='' />
          <p>by continuing, you are agree to the terms and privacy</p>
        </div>
      </div>


    </div>
  )
}

export default LogeinSinup