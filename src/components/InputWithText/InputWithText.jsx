import React from 'react'
import "./InputWithText.css"
import { useState } from 'react'


const InputWithText = () => {
  const [inputValue, setInputValue] = useState('')

  function onChangeHandler(event) {
    setInputValue(event.target.value)
  }

  return (
    <div className='container'>
      <input type="text" placeholder='Type here' onChange={onChangeHandler}/>
      <p>{inputValue}</p>
    </div>
  )
}

export default InputWithText
