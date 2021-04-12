import React from 'react'
import PropTypes from 'prop-types'
import { Close } from '../Icon'

const Card = ({
  children,
  width,
  height,
  bg,
  shadow,
  closable,
  padding,
  margin,
}) => {
  return (
    <div
      className={`
    ${width}
    ${height}
    ${bg}
    ${shadow}
    ${padding}
    ${margin}
    rounded-2xl
    hover:shadow-md
    `}
    >
      <div className='w-full h-full relative'>
        {closable && (
          <div
            className='absolute top-0 right-0 cursor-pointer'
            onClick={closable}
          >
            <Close />
          </div>
        )}
        {children}
      </div>
    </div>
  )
}

Card.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  bg: PropTypes.string,
  shadow: PropTypes.string,
  closable: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
  padding: PropTypes.string,
  margin: PropTypes.string,
}

Card.defaultProps = {
  width: 'w-full',
  height: 'h-full',
  bg: 'bg-gray-100',
  shadow: 'shadow-sm',
  padding: 'p-4',
  margin: 'm-0',
}

export default Card
