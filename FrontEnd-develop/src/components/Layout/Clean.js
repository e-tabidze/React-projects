import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/svg/Logo'
import LayoutThemeContext from '../../LayoutThemeContext'


const Clean = ({ children }) => {
  const [bg, setBg] = useState('md:bg-cleanbg-light')
  const [smBg, setSmBg] = useState('bg-white')
  const [hideHeader, setHideHeader] = useState(false)
  const [vh, setVh] = useState("100%")

  const hooks = {
    hideHeader,
    setHideHeader,
    bg,
    setBg,
    smBg,
    setSmBg,
  }

  useEffect(() => { setVh(window.innerHeight); }, [])

  return (
    <LayoutThemeContext.Provider value={hooks}>
      {!hideHeader &&  <div className='container fixed '>
        <div className='bg-white flex w-full justify-between h-16 md:h-20'>
          <div className='px-7 flex items-center'>
            <NavLink to='/wall'>
              <Logo />
            </NavLink>
          </div>
        </div> 
      </div>}
      <div className={` ${bg} ${smBg} container mx-auto h-screen `}>
        <div style={{height: vh }} className='w-full flex justify-center items-center'>
          {children}
        </div>
      </div>
    </LayoutThemeContext.Provider>
  )
}
export default Clean
