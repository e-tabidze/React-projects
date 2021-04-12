import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoWhite from '../../assets/svg/LogoWhite'
const Clean = ({ children }) => (
  <>
    <div className='container fixed'>
      <div className='flex w-full justify-between h-16 md:h-20 bg-blue'>
        <div className='px-7 flex items-center'>
          <NavLink to='/wall'>
            <LogoWhite />
          </NavLink>
        </div>
      </div>
    </div>
    <div className='container mx-auto bg-white md:bg-cleanbg-light'>
      <div className='w-full h-screen flex justify-center items-center'>
        {children}
      </div>
    </div>
  </>
)

export default Clean
