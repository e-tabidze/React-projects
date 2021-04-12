import React from 'react'
import PropTypes from 'prop-types'

const Divider = ({ width, height, bg, color, margin, padding }) => {
  return (
    <div
      className={`
        ${width}
        ${height}
        ${bg}
        ${color}
        ${padding}
        ${margin}
        rounded-lg
      `}
    />
  )
}

Divider.prototype = {
  width: PropTypes.string,
  height: PropTypes.string,
  bg: PropTypes.string,
  color: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
}

Divider.defaultProps = {
  width: 'w-5/6',
  height: 'h-0.5',
  bg: 'bg-blue',
  color: 'blue',
}

export default Divider
