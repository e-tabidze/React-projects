import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  children,
  width,
  height,
  bg,
  shadow,
  color,
  padding,
  margin,
  textSize,
  bold,
  onClick,
  disabled,
}) => {
  const handleClick = (e) => {
    if (disabled) return null
    onClick(e)
    return null
  }

  return (
    <div
      className={`
      ${width}
      ${height}
      ${bg}
      ${color}
      ${textSize}
      ${bold ? 'font-bold' : 'font-normal'}
      ${shadow}
      ${padding}
      ${margin}
      hover:bg-blue-hover
      transition 
      rounded-md
      hover:shadow-md
      items-center 
      flex 
      justify-center
      cursor-pointer
    `}
      onClick={handleClick}
    >
      {children}
    </div>
  )
}

Button.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  bg: PropTypes.string,
  color: PropTypes.string,
  textSize: PropTypes.string,
  bold: PropTypes.bool,
  shadow: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool
}

Button.defaultProps = {
  width: 'w-40',
  height: 'h-12',
  bg: 'bg-blue',
  color: 'text-white',
  textSize: 'text-sm',
  bold: false,
  shadow: 'shadow-sm',
  padding: '',
  margin: '',
  onClick: () => {
    return;
  },
  disabled: false
}

export default Button
