import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Card from '../../components/Card'
import Square from '../../components/Square'
import {
  Home,
  Book,
  Whead,
  Mhead,
  Groups,
  Bag,
  Cv,
  Progress,
} from '../../components/Icon'

import Wallitem from '../../components/shared/wall/WallItem'

const Wall = () => {
  const [showInfoCard, setShowInfoCard] = useState(true)
  const closeInfoCard = () => {
    setShowInfoCard(!showInfoCard)
  }

  return (
    <div className='p-6'>
      <div className='h-18 w-full text-3xl text-gray-800 font-bold p-3'>
        Dashboard
      </div>
      <div className='w-full flex space-between items-start flex-wrap'>
        {showInfoCard && (
          <div className='xl:w-1/3 lg:w-2/4 md:w-2/4 sm:w-full p-3 hidden md:block'>
            <Card
              width='w-full'
              height='h-80'
              bg='bg-white'
              shadow='shadow-xl'
              closable={closeInfoCard}
            >
              <div className='text-base text-blue font-bold p-2'>
                Learn more about yourself
              </div>
              <div className='text-sm text-tblack-light px-2'>
                Find our your qualities and strengths by doing these modules.
              </div>
              <div className='text-sm text-wall-tealish font-bold px-2 pt-3'>
                Take me there
              </div>
            </Card>
          </div>
        )}

        <Wallitem
          bg='bg-wall-blue'
          icon={<Book size='30' />}
          title='Mahala Edu'
        >
          Finish our free online courses and add them to your CV.
        </Wallitem>

        <Wallitem
          bg='bg-wall-green'
          icon={<Whead size='30' />}
          title='My Qualities & Strengths'
        >
          Find out more about your qualities and strengths in our online module.
          This will help you describe your self better in an interview.
        </Wallitem>

        <Wallitem
          bg='bg-wall-pink'
          icon={<Mhead size='30' />}
          title='Information Hub'
        >
          Find information on how to apply for jobs or education opportunities.
        </Wallitem>

        <Wallitem
          bg='bg-wall-tealish'
          icon={<Groups size='30' />}
          title='My Groups'
        >
          Ask questions and get answers from other young people using
          JobStarter.
        </Wallitem>

        <Wallitem
          bg='bg-wall-orange'
          icon={<Bag size='30' />}
          title='My Interviews'
        >
          Click here to see if you have been shortlisted for any opportunities.
        </Wallitem>
      </div>
    </div>
  )
}

export default Wall
