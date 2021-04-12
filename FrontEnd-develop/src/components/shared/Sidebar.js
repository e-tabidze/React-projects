import React, { useState, useEffect } from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { Cv } from '../Icon'
import Card from '../Card'

import Navbar from '../Navbar'

const Sidebar = ({ navisopen, navtoggle }) => {
  const [showInfoCard, setShowInfoCard] = useState(true)
  const closeInfoCard = () => {
    setShowInfoCard(!showInfoCard)
  }
  return (
    <>
      <div
        className={` ${!navisopen ? 'block md:hidden' : 'hidden'} ${
          showInfoCard ? 'h-60' : 'h-20'
        } bg-white px-6  `}
      >
        <div className='h-16 pl-6 block md:hidden '>
          <div className='h-full flex items-center'>
            <img
              src={require('../../assets/img/userphototemp.png')}
              className='rounded-lg w-10'
            />
            <div className='px-5 text-xl font-bold font-sans'>
              Hello, Rebecca!
            </div>
          </div>
        </div>
        {showInfoCard && (
          <Card height='h-30' closable={closeInfoCard}>
            <div className='text-base text-blue font-bold p-2'>
              Learn more about yourself{' '}
            </div>
            <div className='text-sm text-gray-400 px-2'>
              Find our your qualities and strengths by doing these modules.{' '}
            </div>
            <div className='text-sm text-gray-400 font-bold px-2 pt-3'>
              {' '}
              Take me there
            </div>
          </Card>
        )}
      </div>
      <div
        className={` h-80 w-full bg-white mt-0.5 
      ${navisopen ? 'block' : 'hidden md:block'}
    `}
        style={{ minHeight: '850px' }}
      >
        <div className='p-6 hidden md:block'>
          <div className='w-20 h-20 p-1'>
            <img
              src={require('../../assets/img/userphototemp.png')}
              className='rounded-xl'
            />
          </div>
          <div className='text-xl font-bold pt-4 pb-2'>Hello, Rebecca!</div>
        </div>
        <div className='h-16 bg-blue text-white pl-6 block md:hidden '>
          <div className='h-full flex items-center'>
            <img
              src={require('../../assets/img/userphototemp.png')}
              className='rounded-lg w-10'
            />
            <div className='text-sm px-5 font-sans'>
              Logged in as <span className='font-sans font-bold'>Rebecca</span>
            </div>
          </div>
        </div>

        <div>
          <Navbar />
        </div>
        <div className='w-full bg-white flex items-center justify-center py-8'>
          <div className='w-64 h-40 bg-gray-100 rounded-xl p-5'>
            <div className='flex justify-between items-center'>
              <Cv size='55' color='#FFFFFF' />
              <div>
                <div className='font-bold text-lg text-blue'>Download CV</div>
                <div className='font-normal textt-md text-gray-400'>
                  Nemo enim ipsam.
                </div>
              </div>
            </div>
            <button className='w-full h-11 bg-blue-dark hover:bg-blue-light transition text-white font-bold rounded-md mt-5'>
              Download
            </button>
          </div>
        </div>
        <div className='px-6 pb-6 bg-white font-bold text-blue-light text-md'>
          Talk to us
        </div>
      </div>
    </>
  )
}

export default withRouter(Sidebar)
