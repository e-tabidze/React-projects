import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import Square from '../Square'
const NavbarItem = ({ to, label, squareBgColor, children }) => {
  return (
    <NavLink
      exact
      to={to}
      className='h-16 relative bg-white hover:bg-gray-200 transition flex items-center px-6 border-b border-gray-100'
      activeClassName='nav_active'
    >
      <Square bg={squareBgColor}>{children}</Square>

      <div className='pl-4 font-bold text-md text-blue'>{label}</div>
    </NavLink>
  )
}

NavbarItem.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string,
  squareBgColor: PropTypes.string,
}

NavbarItem.defaultProps = {
  to: '',
  label: '',
  squareBgColor: '',
}

export default NavbarItem
