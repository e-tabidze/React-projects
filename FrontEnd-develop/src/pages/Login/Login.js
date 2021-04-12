import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home } from '../../components/Icon'
import Button from '../../components/Button'
import AuthItem from '../../components/shared/Auth/AuthItem'

const Login = () => {
  return (
    <AuthItem
      title='Welcome back!'
      text='Please sign in to continue'
      icon={<Home size='48' color='#39A7E1' />}
      iconBg='bg-navsquare-learn'
    >
      <div className='h-full flex flex-col justify-between items-center'>
        <div className='text-center'>
          <input
            className='form-input mt-8 h-10 w-full md:w-80 text-center placeholder-tblack-elight text-tblack text-sm'
            placeholder='Your email'
          />
          <input
            type='password'
            className='form-input mt-3 mb-4 md:mb-11 h-10 w-full md:w-80 text-center placeholder-tblack-elight text-tblack text-sm'
            placeholder='Your password'
          />
          <Button width='w-full md:w-40' margin='m-0 m-auto' bold>
            Sign in
          </Button>
        </div>
        <div>
          <div className='mt-10'>
            <span className='text-sm'>Forgot your password?</span>
            <NavLink
              to='/request-reset'
              className='text-sm text-wall-tealish font-bold pl-1'
            >
              Reset
            </NavLink>
          </div>
        </div>
      </div>
    </AuthItem>
  )
}

export default Login
