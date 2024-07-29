import React from 'react'
import "./LoginForm.css"
import { useState } from 'react'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


  function onEmailChangeHandler(event) {
    setEmail(event.target.value)
  }

  function onPasswordChangeHandler(event) {
    setPassword(event.target.value)
  }

  function isInputValid() {
    if (!password || !email) return false
    if (emailRegex.test(email) == false) return false
  }

  function onSubmitHandler(event) {
    event.preventDefault()
    if (isInputValid() == false) {
      console.log("Invalid fields");
    }
    else {
      console.log(email + password);
    }
  }

return (
<form className='container' onSubmit={onSubmitHandler}>
  <div className='input-container'>
    <label htmlFor="email">Email</label>
    <input type="text" placeholder='Email' id="email" onChange={onEmailChangeHandler}/>
  </div>
  <div className='input-container'>
    <label htmlFor="password">Password</label>
    <input type="text" placeholder='Password' id="password" onChange={onPasswordChangeHandler}/>
  </div>
  <button type='submit'>Login</button>
</form>
)
}

export default LoginForm
