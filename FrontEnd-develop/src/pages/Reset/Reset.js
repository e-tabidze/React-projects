import React, { useState, useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { SignUpPass, Like } from '../../components/Icon'
import Button from '../../components/Button'
import AuthItem from '../../components/shared/Auth/AuthItem'
import PasswordLevelIndicator from '../../components/PasswordLevelIndicator'
import LayoutThemeContext from '../../LayoutThemeContext'

const Reset = () => {
  const [resetStage, setResetStage] = useState(1)
  const [errorNameField, setErrorNameField] = useState(false)
  const [errorPasswordField, setErrorPasswordField] = useState(false)
  const [passwordFieldValue, setPasswordFieldValue] = useState('')
  const [passwordStrength, setPasswordStrength] = useState(0)
  const { hideHeader, setHideHeader, bg, setBg, smBg, setSmBg } = useContext(
    LayoutThemeContext
  )
  const history = useHistory();


  //handlers

  const handleFinish = () => {
    setResetStage(2)
    setBg('bg-auth-resetbg')
    setHideHeader(true)
    setSmBg('bg-auth-resetbg')
  }

  const handleGotoLogin = () => {
    history.push("/login")
    setBg('md:bg-cleanbg-light')
    setHideHeader(false)
    setSmBg('bg-white')
  }

  const validatePassword = (pass) => {
    setPasswordFieldValue(pass)
    if (pass.length < 1) {
      setPasswordStrength(0)
    }
    if (pass.length > 0 && pass.length < 2) {
      setPasswordStrength(1)
    }
    if (pass.length > 3 && pass.length < 8) {
      setPasswordStrength(2)
    }
    if (pass.length > 8) {
      setPasswordStrength(3)
    }
  }

  ///renders

  const renderReset = () => {
    if (resetStage === 1) {
      return (
        <AuthItem
          title='Reset your password'
          text='Please provide a new password'
          icon={<SignUpPass />}
          iconBg='bg-navsquare-interviews'
        >
          <div className='h-full flex flex-col justify-between items-center w-full'>
            <div className='text-center w-full'>
              <input
                type='password'
                className={`${
                  errorNameField && 'field_error'
                }  form-input mt-8 h-10 w-full md:w-80 text-center placeholder-tblack-elight text-tblack text-sm `}
                placeholder='Add a password'
                name='password'
                id='password'
                onChange={(e) => validatePassword(e.target.value)}
                value={passwordFieldValue && passwordFieldValue}
              />
              <input
                type='password'
                className={`${
                  errorNameField && 'field_error'
                } form-input mt-3 h-10 w-full md:w-80 text-center placeholder-tblack-elight text-tblack text-sm`}
                placeholder='Confirm password'
                name='repassword'
                id='repassword'
              />
              {errorPasswordField && (
                <p className='text-sm text-auth-fielderror'>
                  Passwords do not match
                </p>
              )}
              <PasswordLevelIndicator strength={passwordStrength} />
            </div>
            <div className='w-full'>
              <Button
                width='w-full md:w-40'
                margin='mt-4 md:mt-11 m-auto'
                bold
                onClick={() => handleFinish()}
              >
                Reset password
              </Button>
            </div>
          </div>
        </AuthItem>
      )
    }

    if (resetStage === 2) {
      return (
        <AuthItem
          title='Great! Your password has been reset'
          text='You may now continue to the sign in page to access your account.'
          titleColor="text-white md:text-black"
          textColor="text-white md:text-tblack-light"
          bg='bg-auth-resetbg md:bg-white'
          icon={<Like />}
          iconBg='bg-navsquare-hub'
        >
        
          <div className='h-full flex flex-col justify-between items-center w-full'>
            <div></div>
            <div className='w-full'>
              <div className='w-full text-sm m-auto mt-0 text-center'>
                
              </div>
              <Button width='w-full md:w-40' margin='mt-2 md:mt-4 m-auto' bold onClick={()=>handleGotoLogin()}>
              Sign in
              </Button>
            </div>
          </div>
        </AuthItem>
      )
    }

  }

  return <>{renderReset()} </>
}

export default Reset
