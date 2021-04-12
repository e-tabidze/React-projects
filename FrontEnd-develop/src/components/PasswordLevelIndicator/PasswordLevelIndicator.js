import React from 'react'
import PropTypes from 'prop-types'

const PasswordLevelIndicator = ({ strength }) => {
  return (
    <>
      <div className='w-full md:w-80 h-2 bg-igray mt-6 m-auto rounded-md'>
        <div
          className={` 
    ${strength === 1 && 'w-1/3 bg-wall-pink'} 
    ${strength === 2 && 'w-2/3 bg-wall-orange'} 
    ${strength === 3 && 'w-full bg-wall-tealish'} 
    h-full  rounded-md transition-all duration-3000 `}
        ></div>
      </div>
      <div>
        <span className='text-sm text-tblack-light'>
          Password strength:&nbsp;
          {strength === 0 && (
            <span className='text-sm text-tblack-light'>None</span>
          )}
          {strength === 1 && (
            <span className='text-sm text-wall-pink font-bold'>Poor</span>
          )}
          {strength === 2 && (
            <span className='text-sm text-wall-orange font-bold'>Medium</span>
          )}
          {strength === 3 && (
            <span className='text-sm text-wall-tealish font-bold'>Strong</span>
          )}
        </span>
      </div>
    </>
  )
}

PasswordLevelIndicator.propTypes = {
  strength: PropTypes.number,
}

PasswordLevelIndicator.defaultProps = {
  strength: 0,
}

export default PasswordLevelIndicator
