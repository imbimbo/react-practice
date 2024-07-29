import React from 'react'
import { useState } from 'react'
import Input from '../../components/Input/Input'
import "./Register.css"

const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


  function onEmailChangeHandler(event) {
    setEmail(event.target.value)
  }

  function onPasswordChangeHandler(event) {
    setPassword(event.target.value)
  }

  function onConfirmPasswordChangeHandler(event) {
    setConfirmPassword(event.target.value)
  }

  function isInputValid() {
    if (!password || !email) return false
    if (password != confirmPassword) return false
    if (emailRegex.test(email) == false) return false
  }

  function onSubmitHandler(event) {
    event.preventDefault()
    if (isInputValid() == false) {
      alert("Invalid fields");
    }
    else {
      alert(email + password);
    }
  }

  return (
    <form className='register-form' onSubmit={onSubmitHandler}>
      <Input htmlFor="email" label="Email" id="email" onChange={onEmailChangeHandler}/>
      <Input htmlFor="password" label="Password" id="password" onChange={onPasswordChangeHandler}/>
      <Input htmlFor="password" label="Confirm Password" id="password" onChange={onConfirmPasswordChangeHandler}/>
      <button type='submit'>Register</button>
    </form>
    )
}

export default RegisterPage
