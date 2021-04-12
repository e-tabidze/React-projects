import React from 'react'
import PropTypes from 'prop-types'
import { Check } from '../../Icon'

const GoalItem = ({ id, title, isChecked, onChange }) => {
  return (
    <div
      className={` 
      ${isChecked ? 'bg-wall-blue text-white' : ' bg-white text-wall-blue'} 
      w-full h-12 mb-2 rounded-md font-bold text-sm px-5 py-3 border-wall-blue border-2 cursor-pointer
      flex flex-row justify-between `}
      onClick={() => onChange(!isChecked, id)}
    >
      <div>{title}</div>
      <div className='h-6 w-6 bg-navsquare-learn flex justify-center items-center rounded-sm'>
        {isChecked && <Check />}
      </div>
    </div>
  )
}

GoalItem.propTypes = {
  title: PropTypes.string,
  isChecked: PropTypes.bool,
}

GoalItem.defaultProps = {
  title: '',
  isChecked: false,
}

export default GoalItem
