import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import Logo from '../../assets/svg/Logo'
import Button from '../Button'
import { Bell, Nav, Nave } from '../Icon'

const Header = ({ navisopen, navtoggle }) => {
  return (
    <div className='flex w-full justify-between h-16 md:h-20 bg-white border-b-2 border-navsquare-learn'>
      <div className='px-7 flex items-center'>
        <NavLink to="/wall"><Logo  /></NavLink>
      </div>
      <div className='flex items-center mx-3'>
        <div className='text-sm px-5 font-sans hidden md:block'>
          Logged in as <span className='font-sans font-bold'>Rebecca</span>
        </div>
        <div className='text-xs px-5'>
          <div className="cursor-pointer"><Bell /></div>
        </div>
        <div className='w-16 block sm:block  md:hidden lg:hidden xl:hidden items-center '>
          <div onClick={navtoggle} className=" w-full flex items-center justify-center" >{navisopen ? <Nave /> : <Nav />}</div>
        </div>
        <div className='px-5 hidden md:block '>
           <Button width="w-28" height="h-10" bold>Sign out</Button>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Header)
