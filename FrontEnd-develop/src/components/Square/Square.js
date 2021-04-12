import React from 'react'
import PropTypes from 'prop-types'

const Square = ({ size, bg, border, children }) => (
  <div
    className={`flex items-center justify-center rounded-xl 
    ${size ? 'h-' + size : 'h-10'}
    ${size ? 'w-' + size : 'w-10'}
    ${bg}
    ${border}
    `}
  >
    {children}
  </div>
)

Square.propTypes = {
  size: PropTypes.string,
  bg: PropTypes.string,
  border: PropTypes.string,
}

Square.defaultProps = {
  bg: 'bg-gray-100',
  border: '',
}

export default Square
