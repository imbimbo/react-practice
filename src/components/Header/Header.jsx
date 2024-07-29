import React from 'react'
import './Header.css'
import PropTypes from 'prop-types'

const Header = (props) => {
  const hideMenu = props.hideMenu

return (
<div className='header'>
  {hideMenu ? null : (
  <ul>
    <li>Home</li>
    <li>About</li>
  </ul>
  )}
  {props.name}
</div>
)
}

Header.propTypes = {
  hideMenu: PropTypes.bool,
  name: PropTypes.string
}

export default Header
