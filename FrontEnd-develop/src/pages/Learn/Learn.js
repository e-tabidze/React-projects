import React, { useState } from 'react'
import Card from '../../components/Card'
import Divider from '../../components/Divider/Divider'

const Learn = () => {
  const [showInfoCard, setShowInfoCard] = useState(true)
  const closeInfoCard = () => {
    setShowInfoCard(!showInfoCard)
  }
  return (
    <>
      <div className='p-6'>
        <div className='h-18 w-full text-3xl text-gray-800 font-bold p-3'>
          Mahala Edu
        </div>
        <div className='xl:w-2/3 lg:w-2/4 md:w-2/4 sm:w-full p-3 md:block'>
          <Card width='w-full' height='h-full' bg='bg-blue' shadow='shadow-xl'>
            <div className='text-lg text-white font-bold py-2 mt-2'>
              Get Started Here
            </div>
            <div className='text-3xl text-white font-bold py-2 mt-2'>
              Create a Good Impression
            </div>
            <div className='text-lg text-white py-2 mt-2'>
              Creating a good first impression is easier said than done,
              especially in an interview. In this chapter, we will share
              telltale signs of what interviewers look for when interviewing a
              potential candidate.
            </div>
            <div className='text-lg text-blue-light mt-16'>
              Progress 0% Chapters 0/3
            </div>
          </Card>
        </div>

        <div className='h-18 mt-16 mb-4 text-xl text-gray-800 font-bold p-3'>
          The Basics - Modules you have to complete
        </div>
        <div className='flex flex-col md:flex-row justify-between pb-16'>
          <div className='xl:w-1/3 lg:w-4/6 h-full md:w-1/3 h-32 rounded-md flex justify-between bg-white m-3'>
            <div>
              <div className='text-lg ml-2 text-blue  font-semibold  py-2 mt-2'>
                Numeracy for the Workplace
              </div>
              <div className='ml-4 mt-4 flex'>
                <div className='text-lg mr-4 mt-2 text-blue-light mb-2'>
                  Progress <span className='font-semibold'>0%</span>
                </div>
                <div className='text-lg mr-4 mt-2 text-blue-light mb-2'>
                  Chapters <span className='font-semibold'>0/10</span>
                </div>
              </div>
            </div>
            <div className='flex items-center mr-5'>
              <img
                className='rounded h-20'
                src={require('../../assets/img/userphototemp.png')}
              />
            </div>
          </div>

          <div className='xl:w-1/3 lg:w-4/6 h-full md:w-1/3 h-32 rounded-md flex justify-between bg-white m-3'>
            <div>
              <div className='text-lg ml-2 text-blue  font-semibold  py-2 mt-2'>
                Numeracy for the Workplace
              </div>
              <div className='ml-4 mt-4 flex'>
                <div className='text-lg mr-4 mt-2 text-blue-light mb-2'>
                  Progress <span className='font-semibold'>0%</span>
                </div>
                <div className='text-lg mr-4 mt-2 text-blue-light mb-2'>
                  Chapters <span className='font-semibold'>0/10</span>
                </div>
              </div>
            </div>
            <div className='flex items-center mr-5'>
              <img
                className='rounded h-20'
                src={require('../../assets/img/userphototemp.png')}
              />
            </div>
          </div>

          <div className='xl:w-1/3 lg:w-4/6 h-full md:w-1/3 h-32 rounded-md flex justify-between bg-white m-3'>
            <div>
              <div className='text-lg ml-2 text-blue  font-semibold  py-2 mt-2'>
                Numeracy for the Workplace
              </div>
              <div className='ml-4 mt-4 flex'>
                <div className='text-lg mr-4 mt-2 text-blue-light mb-2'>
                  Progress <span className='font-semibold'>0%</span>
                </div>
                <div className='text-lg mr-4 mt-2 text-blue-light mb-2'>
                  Chapters <span className='font-semibold'>0/10</span>
                </div>
              </div>
            </div>
            <div className='flex items-center mr-5'>
              <img
                className='rounded h-20'
                src={require('../../assets/img/userphototemp.png')}
              />
            </div>
          </div>
        </div>
      </div>

      {/* on white background */}

      <div className='w-full bg-white pt-16 pb-32 p-6'>
        <div className='flex flex-col md:flex-row justify-between'>
          <Card width='w-full md:w-1/3' bg='bg-navsquare-learn m-3'>
            <div className='font-semibold'>Extra Modules</div>
            <div className='w-full h-32 rounded-md bg-navsquare-learn flex'>
              <div className='flex items-center ml-5'>
                <img
                  className='rounded h-20'
                  src={require('../../assets/img/userphototemp.png')}
                />
              </div>
              <div>
                <div className='text-lg text-blue font-extrabold ml-2 py-2 mt-2'>
                  Module Headline Goes Here
                </div>
                <div className='text-lg text-blue-light ml-2 mt-4'>
                  Progress <span className='font-semibold'>0%</span>
                </div>
              </div>
            </div>
            <Divider />
            <div className='w-full h-32 rounded-md bg-navsquare-learn flex'>
              <div className='flex items-center ml-5'>
                <img
                  className='rounded h-20'
                  src={require('../../assets/img/userphototemp.png')}
                />
              </div>
              <div>
                <div className='text-lg text-blue font-extrabold ml-2 py-2 mt-2'>
                  Module Headline Goes Here
                </div>
                <div className='text-lg text-blue-light ml-2 mt-4'>
                  Progress <span className='font-semibold'>0%</span>
                </div>
              </div>
            </div>
            <Divider />
            <div className='w-full h-32 rounded-md bg-navsquare-learn flex'>
              <div className='flex items-center ml-5'>
                <img
                  className='rounded h-20'
                  src={require('../../assets/img/userphototemp.png')}
                />
              </div>
              <div>
                <div className='text-lg text-blue font-extrabold ml-2 py-2 mt-2'>
                  Module Headline Goes Here
                </div>
                <div className='text-lg text-blue-light ml-2 mt-4'>
                  Progress <span className='font-semibold'>0%</span>
                </div>
              </div>
            </div>
          </Card>
          <Card width='w-full md:w-1/3' bg='bg-navsquare-learn m-3'>
            <div className='font-semibold'>Extra Modules</div>
            <div className='w-full h-32 rounded-md bg-navsquare-learn flex'>
              <div className='flex items-center ml-5'>
                <img
                  className='rounded h-20'
                  src={require('../../assets/img/userphototemp.png')}
                />
              </div>
              <div>
                <div className='text-lg text-blue font-extrabold ml-2 py-2 mt-2'>
                  Module Headline Goes Here
                </div>
                <div className='text-lg text-blue-light ml-2 mt-4'>
                  Progress <span className='font-semibold'>0%</span>
                </div>
              </div>
            </div>
            <Divider />
            <div className='w-full h-32 rounded-md bg-navsquare-learn flex'>
              <div className='flex items-center ml-5'>
                <img
                  className='rounded h-20'
                  src={require('../../assets/img/userphototemp.png')}
                />
              </div>
              <div>
                <div className='text-lg text-blue font-extrabold ml-2 py-2 mt-2'>
                  Module Headline Goes Here
                </div>
                <div className='text-lg text-blue-light ml-2 mt-4'>
                  Progress <span className='font-semibold'>0%</span>
                </div>
              </div>
            </div>
            <Divider />
            <div className='w-full h-32 rounded-md bg-navsquare-learn flex'>
              <div className='flex items-center ml-5'>
                <img
                  className='rounded h-20'
                  src={require('../../assets/img/userphototemp.png')}
                />
              </div>
              <div>
                <div className='text-lg text-blue font-extrabold ml-2 py-2 mt-2'>
                  Module Headline Goes Here
                </div>
                <div className='text-lg text-blue-light ml-2 mt-4'>
                  Progress <span className='font-semibold'>0%</span>
                </div>
              </div>
            </div>
          </Card>

          {showInfoCard && (
            <Card
              width='w-full md:w-1/3'
              bg='bg-navsquare-learn m-3'
              shadow='shadow-xl'
              closable={closeInfoCard}
            >
              <div className='text-lg text-blue font-extrabold ml-2 py-2 mt-4'>
                Review Your Completed Modules
              </div>
              <div className='w-full h-24 rounded-md bg-navsquare-learn flex'>
                <div>
                  <div className='text-lg font-semibold text-blue-light ml-2 mt-4'>
                    Go to completed modules
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      </div>
    </>
  )
}

export default Learn
