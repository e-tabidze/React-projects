import React from 'react'
import Button from '../../components/Button'

const Confirm = () => {
  return (
    <div className='w-520 h-full md:h-580 flex flex-col items-center bg-white md:rounded-xl md:shadow-md mt-28 '>
      <div
        className='w-full h-48 flex items-center bg-no-repeat bg-cover p-8 text-left text-3xl text-white font-bold'
        style={{
          backgroundImage: `url(${require('../../assets/img/confirmr.png')})`,
        }}
      >
        Welcome to JobStarter
      </div>

      <div className="w-full px-8 pb-6 md:px-6 pt-8 md:pt-10 ">
        <div className='mt-7 font-bold text-2xl md:text-2xl text-center'>
          Please verify your email address
        </div>

        <div className='w-full h-full flex flex-col justify-between items-center'>
          <div className='text-center pt-10 w-full'>
            <Button width='w-full md:w-60' margin='m-0 m-auto' bold>
              Confirm my account
            </Button>
          </div>
          <div>
            <div className='mt-10'>
              <span className='text-xs md:text-sm'>
                If you did not request this, please ignore this email.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirm
