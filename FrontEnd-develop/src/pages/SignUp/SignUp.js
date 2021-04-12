import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { SignUpUser, SignUpPass, SignUpInbox } from '../../components/Icon'
import Button from '../../components/Button'
import AuthItem from '../../components/shared/Auth/AuthItem'
import PasswordLevelIndicator from '../../components/PasswordLevelIndicator'

const SignUp = () => {
  const [signupStage, setSignupState] = useState(1)
  const [errorNameField, setErrorNameField] = useState(false)
  const [errorEmailField, setErrorEmailField] = useState(false)
  const [errorPasswordField, setErrorPasswordField] = useState(false)
  const [emailFieldValue, setEmailFieldValue] = useState('')
  const [passwordFieldValue, setPasswordFieldValue] = useState('')
  const [passwordStrength, setPasswordStrength] = useState(0)

  //handlers
  const handleContinue = (stage) => {
    if (emailFieldValue != '') {
      setSignupState(stage)
    } else {
      setErrorEmailField(true)
    }
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

  //renders
  const renderSignUpStage = () => {
    if (signupStage === 1) {
      return (
        <AuthItem
          title='Create your account'
          text='Please provide the following to continue'
          icon={<SignUpUser />}
          iconBg='bg-auth-pink'
        >
          <div className='h-full flex flex-col justify-between items-center w-full'>
            <div className='text-center w-full'>
              <input
                className={`${
                  errorEmailField && 'field_error'
                }  form-input mt-8 h-10 w-full md:w-80 text-center placeholder-tblack-elight text-tblack text-sm `}
                placeholder='Add your email'
                name='email'
                id='email'
                onChange={(e) => setEmailFieldValue(e.target.value)}
              />
              {errorEmailField && (
                <div className='text-sm text-auth-fielderror'>
                  Invalid email address
                </div>
              )}
              <input
                className={`${
                  errorNameField && 'field_error'
                } form-input mt-3 h-10 w-full md:w-80 text-center placeholder-tblack-elight text-tblack text-sm`}
                name='fullname'
                id='fullname'
                placeholder='Add your first name'
              />
              {errorNameField && (
                <p className='text-sm text-auth-fielderror'>
                  Please add your first name
                </p>
              )}
              <Button
                width='w-full md:w-40'
                margin='mt-4 md:mt-11 m-auto'
                bold
                onClick={() => handleContinue(2)}
              >
                Continue
              </Button>
            </div>
            <div>
              <div>
                <span className='text-sm'>Already have an account?</span>
                <NavLink
                  to='/login'
                  className='text-sm text-wall-tealish font-bold pl-1'
                >
                  Sign in
                </NavLink>
              </div>
            </div>
          </div>
        </AuthItem>
      )
    }

    if (signupStage === 2) {
      return (
        <AuthItem
          title='Set up your password'
          text=''
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
                onClick={() => handleContinue(3)}
              >
                Sign up
              </Button>
            </div>
          </div>
        </AuthItem>
      )
    }

    if (signupStage === 3) {
      return (
        <AuthItem
          title='Check your email'
          text='We have sent a verification link to r.nkosana@gmail.com. Open your email and click on the verification link to confirm your email.'
          icon={<SignUpInbox />}
          iconBg='bg-navsquare-interviews'
        >
          <div className='h-full flex flex-col justify-between items-center w-full'>
            <div></div>
            <div className='w-full'>
              <div className='w-full text-sm m-auto mt-0 text-center'>
                Didn’t receive the email?
              </div>
              <Button width='w-full md:w-40' margin='mt-2 md:mt-4 m-auto' bold>
                Send again
              </Button>
            </div>
          </div>
        </AuthItem>
      )
    }
  }

  return <>{renderSignUpStage()}</>
}

export default SignUp
