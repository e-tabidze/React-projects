import React from 'react'
import PropTypes from 'prop-types'
import Square from '../../Square'

const AuthItem = ({ children, icon, iconBg, title, text, bg, titleColor, textColor }) => {
  return (
    <div className={`${bg} w-520 h-full md:h-580 flex flex-col items-center md:rounded-xl md:shadow-md px-8 pb-6 md:px-6 pt-16 md:pt-10 `}>
      <div className='mt-8'>
        <Square size='24' bg={iconBg}>
          {icon}
        </Square>
      </div>
      <div className={`${titleColor} mt-7 font-bold text-2xl md:text-3xl text-center`}>{title}</div>
      <div className={`${textColor} mt-5 text-sm px-4 md:px-14  text-center `}>{text}</div>
      {children}
    </div>
  )
}

AuthItem.propTypes = {
  icon: PropTypes.element,
  iconBg: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  titleColor: PropTypes.string,
  textColor: PropTypes.string,
  bg: PropTypes.string
}

AuthItem.defaultProps = {
  icon: '',
  iconBg: '',
  title: '',
  text: '',
  titleColor: '',
  textColor: 'text-tblack-light',
  bg: 'bg-white'
}

export default AuthItem
