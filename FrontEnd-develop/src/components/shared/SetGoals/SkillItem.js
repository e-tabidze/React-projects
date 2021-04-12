import React from 'react'
import PropTypes from 'prop-types'

const SkillItem = ({ id, title, isChecked, onChange }) => {
  return (
    <div
      className={` 
      ${isChecked ? 'bg-wall-blue text-white' : ' bg-white text-wall-blue'} 
      w-36 md:w-32 h-14 m-1 rounded-md font-bold text-sm border-wall-blue border-2 cursor-pointer
      flex flex-row justify-center text-center items-center `}
      onClick={() => onChange(!isChecked, id)}
    >
      {title}
    </div>
  )
}

SkillItem.propTypes = {
  title: PropTypes.string,
  isChecked: PropTypes.bool,
}

SkillItem.defaultProps = {
  title: '',
  isChecked: false,
}

export default SkillItem
