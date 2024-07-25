import React from 'react'
import './CSS/Login.css'


const Login = () => {
  return (
    <div className='loginonly'>
        <div className='loginonly-container'>
            <h1>Login</h1>
            <div className='loginonly-fields'>
                <input type="email" placeholder='Email Address' />
                <input type="password" placeholder='Password' />
                
            </div>
            <button>Submit</button>
        </div>
    </div>
  )
}

export default Login