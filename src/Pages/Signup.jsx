import React from 'react'
import './CSS/Signup.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account?<Link to='/Login'><span>Login here</span></Link></p>
      <div className="loginsignup-agree">
        <input type="checkbox" name='' id=''/>
        <p>By continuing, i agree tot he terms of use & privacy policy</p>
      </div>
      
      </div>
    </div>
  )
}

export default Signup