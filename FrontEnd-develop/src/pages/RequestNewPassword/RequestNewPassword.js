import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserLock, SignUpInbox } from '../../components/Icon'
import Button from '../../components/Button'
import AuthItem from '../../components/shared/Auth/AuthItem'


const RequestNewPassword = () => {
  const [passwordReqStage, setPasswordReqStage] = useState(1)
  const [errorEmailField, setErrorEmailField] = useState(false)
  const [emailFieldValue, setEmailFieldValue] = useState('')
  const [checkYourEmail, setCheckYourEmail] = useState('Check your email')


  //handlers
  const handleContinue = (stage) => {
    if (emailFieldValue != '') {
      setErrorEmailField(false)
      setPasswordReqStage(stage)
    } else {
      setErrorEmailField(true)
    }
  }


  //renderers
  const renderPasswordRequest = () => {
   

    if (passwordReqStage === 1) {
      return (
        <AuthItem
          title='Trouble signing in?'
          text='Please enter the email you used to register on JobStarter to get started.'
          icon={<UserLock />}
          iconBg='bg-navsquare-progress'
        >
          <div className='h-full flex flex-col justify-between items-center w-full'>
            <div className='text-center w-full'>
            
              <input
                className={`${
                  errorEmailField && 'field_error'
                } form-input mt-8 h-10 w-full md:w-80 text-center placeholder-tblack-elight text-tblack text-sm`}
                placeholder='Add your email'
                name='email'
                id='email'
                onChange={(e) => setEmailFieldValue(e.target.value)}
              />
              {errorEmailField && (
                <p className='text-sm text-auth-fielderror'>
                 Invalid email address
                </p>
              )}
              
            </div>
            <div className='w-full'>
              <Button
                width='w-full md:w-40'
                margin='mt-4 md:mt-11 m-auto'
                bold
                onClick={() => handleContinue(2)}
              >
                Send request
              </Button>
            </div>
          </div>
        </AuthItem>
      )
    }

    if (passwordReqStage === 2) {
      return (
        <AuthItem
          title={checkYourEmail}
          text='We have sent a password reset link to the email address you have supplied. Please follow the instructions to reset your password'
          icon={<SignUpInbox />}
          iconBg='bg-navsquare-qualities'
        >
          <div className='h-full flex flex-col justify-between items-center w-full'>
            <div></div>
            <div className='w-full'>
              <div className='w-full text-sm m-auto mt-0 text-center'>
                Didn’t receive the email?
              </div>
              <Button width='w-full md:w-40' margin='mt-2 md:mt-4 m-auto' bold onClick={()=>setCheckYourEmail('Verification resent')}>
                Send again
              </Button>
            </div>
          </div>
        </AuthItem>
      )
    }
  }

  return <>{renderPasswordRequest()}</>
}

export default RequestNewPassword
