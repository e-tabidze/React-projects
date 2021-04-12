import React, { useState, useEffect, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import LayoutThemeContext from '../../LayoutThemeContext'
import { Like } from '../../components/Icon'
import Button from '../../components/Button'
import GoalItem from '../../components/shared/SetGoals/GoalItem'
import SkillItem from '../../components/shared/SetGoals/SkillItem'
import Square from '../../components/Square'

const goalsobj = {
  data: [
    { id: 1, title: 'Main goal example 1', isChecked: false },
    { id: 2, title: 'Main goal example 2', isChecked: false },
    { id: 3, title: 'Main goal example 3', isChecked: false },
    { id: 4, title: 'Main goal example 4', isChecked: false },
    { id: 5, title: 'Main goal example 5', isChecked: false },
    { id: 6, title: 'Main goal example 6', isChecked: false },
    { id: 7, title: 'Main goal example 7', isChecked: false },
    { id: 8, title: 'Main goal example 8', isChecked: false },
    { id: 9, title: 'Main goal example 9', isChecked: false },
    { id: 10, title: 'Main goal example 10', isChecked: false },
    { id: 11, title: 'Main goal example 11', isChecked: false },
  ],
}

const skillsobj = {
  data: [
    { id: 1, title: 'Speak professionally', isChecked: false },
    { id: 2, title: 'Write professionally', isChecked: false },
    { id: 3, title: 'Read diagrams', isChecked: false },
    { id: 4, title: 'Become a good team-player', isChecked: false },
    { id: 5, title: 'Provide good customer service', isChecked: false },
    { id: 6, title: 'Make a good impression', isChecked: false },
    { id: 7, title: 'Sharpen up my math skills', isChecked: false },
    { id: 8, title: 'Become money wise', isChecked: false },
    { id: 9, title: 'Manage conflict at work', isChecked: false },
    { id: 10, title: 'Create a better CV', isChecked: false },
    { id: 13, title: 'Become entrepreneurial', isChecked: false },
    { id: 14, title: 'Speak professionally', isChecked: false },
    { id: 15, title: 'Write professionally', isChecked: false },
    { id: 16, title: 'Read diagrams', isChecked: false },
    { id: 17, title: 'Become a good team-player', isChecked: false },
    { id: 18, title: 'Provide good customer service', isChecked: false },
    { id: 19, title: 'Make a good impression', isChecked: false },
    { id: 20, title: 'Sharpen up my math skills', isChecked: false },
  ],
}

const SetGoals = () => {
  const [goalsStage, setGoalsStage] = useState(1)
  const { hideHeader, setHideHeader, bg, setBg, smBg, setSmBg } = useContext(
    LayoutThemeContext
  )
  const [goals, setGoals] = useState(goalsobj)
  const [skills, setSkills] = useState(skillsobj)

  useEffect(() => {
    if (goalsStage === 3) {
      setBg('md:bg-auth-secpink')
      setHideHeader(true)
      setSmBg('bg-auth-secpink')
    } else {
      setBg('md:bg-wall-blue')
      setHideHeader(true)
      setSmBg('bg-white')
    }
  }, [goalsStage])

  //handlers

  const handleChangeGoals = (isChecked, id) => {
    setGoals((prevState) => ({
      data: prevState.data.map((el) =>
        el.id === id ? { ...el, isChecked: isChecked } : el
      ),
    }))
  }

  const handleChangeSkills = (isChecked, id) => {
    setSkills((prevState) => ({
      data: prevState.data.map((el) =>
        el.id === id ? { ...el, isChecked: isChecked } : el
      ),
    }))
  }

  const handleNext = () => {
    setGoalsStage(goalsStage + 1)
  }

  //renderers

  const renderSetGoals = () => {
    if (goalsStage === 1) {
      return (
        <>
          <div>
            <div className='text-sm text-wall-blue text-center font-bold'>
              Step {goalsStage} of 2
            </div>
            <div className='text-2xl text-black font-bold mt-8 text-center'>
              Let’s set some goals
            </div>
            <div className='w-80 text-sm text-tblack-light my-8 text-center'>
              What are you looking to achieve on JobStarter? You can choose up
              to 3.
            </div>
          </div>
          <div
            className='w-full h-full px-7 md:px-12 overflow-auto'
            id='goals-scroll'
          >
            {goals &&
              goals.data.map((goal, id) => {
                return (
                  <GoalItem key={id} {...goal} onChange={handleChangeGoals} />
                )
              })}
          </div>
          <div className='w-full h-24 py-5 flex flex-row justify-center items-center md:rounded-b-xl bg-igray-light'>
            <Button bold onClick={() => handleNext()}>
              Continue
            </Button>
          </div>
        </>
      )
    }

    if (goalsStage === 2) {
      return (
        <>
          <div>
            <div className='text-sm text-wall-blue text-center font-bold'>
              Step {goalsStage} of 2
            </div>
            <div className='text-2xl text-black font-bold my-8 px-8 md:px-28 text-center'>
              Which job skills would you like to focus on?
            </div>
          </div>
          <div
            className='w-full h-full px-7 md:px-12 overflow-auto'
            id='goals-scroll'
          >
            <div className='flex flex-row flex-wrap w-full items-center justify-center'>
              {skills &&
                skills.data.map((skill, id) => {
                  return (
                    <SkillItem
                      key={id}
                      {...skill}
                      onChange={handleChangeSkills}
                    />
                  )
                })}
            </div>
          </div>
          <div className='w-full h-24 py-5 flex flex-row justify-center items-center md:rounded-b-xl bg-igray-light'>
            <Button bold onClick={() => handleNext()}>
              Continue
            </Button>
          </div>
        </>
      )
    }

    if (goalsStage === 3) {
      return (
        <>
          <div className='w-full'>
            <div className='w-full flex items-center justify-center pt-10 pb-8'>
              <Square size='24' bg='bg-navsquare-hub'>
                <Like />
              </Square>
            </div>
            <div className='text-2xl text-white md:text-black font-bold my-8 px-10 md:px-28 text-center'>
              You’re good to go!
            </div>
          </div>
          <div className='h-full'></div>
          <div className='w-full h-24 py-5 flex flex-row justify-center items-center md:rounded-b-xl '>
            <Button bold>Get started</Button>
          </div>
        </>
      )
    }
  }

  return (
    <div
      className={`${
        goalsStage === 3 ? 'bg-auth-secpink md:bg-white' : 'bg-white '
      }
    w-520 
    h-full 
    md:h-580 
    flex 
    flex-col 
    justify-between
    items-center 
    md:rounded-xl 
    md:shadow-md 
    pt-16 
    md:pt-8`}
    >
      {renderSetGoals()}
    </div>
  )
}

export default SetGoals
