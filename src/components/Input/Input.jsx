import React from 'react'
import PropTypes from "prop-types"
import "./Input.css"

const Input = (props) => {

  return (
    <div className='input-container'>
    <label htmlFor={props.htmlFor}>{props.label}: {props.inputValue}</label>
    <input
    type={props.type}
    placeholder={props.placeholder}
    required={props.required}
    onChange={props.onChange}
    />
  </div>
  )
}

Input.propTypes = {
  htmlFor: PropTypes.string,
  label: PropTypes.string,
  inputValue: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func
}

export default Input
