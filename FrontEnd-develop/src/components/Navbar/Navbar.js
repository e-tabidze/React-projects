import React from 'react'
import NavbarItem from './NavbarItem'
import { Home, Book, Whead, Mhead, Groups, Bag, Cv, Progress } from '../Icon'

const Navbar = () => {
  return (
    <>
      <NavbarItem to='/wall' label='My Wall' squareBgColor='bg-navsquare-wall'>
        <Home />
      </NavbarItem>
      <NavbarItem to='/learn' label='Mahala Edu' squareBgColor='bg-navsquare-learn'>
        <Book />
      </NavbarItem>
      <NavbarItem to='/qualities' label='My Qualities & Strengths' squareBgColor='bg-navsquare-qualities'>
        <Whead />
      </NavbarItem>
      <NavbarItem to='/hub' label='Information Hub' squareBgColor='bg-navsquare-hub'>
        <Mhead />
      </NavbarItem>
      <NavbarItem to='/groups' label='My Groups' squareBgColor='bg-navsquare-groups'>
        <Groups />
      </NavbarItem>
      <NavbarItem to='/interviews' label='My Interviews' squareBgColor='bg-navsquare-interviews'>
        <Bag />
      </NavbarItem>
      <NavbarItem to='/profile' label='My Profile/CV' squareBgColor='bg-navsquare-profile'>
        <Cv />
      </NavbarItem>
      <NavbarItem to='/progress' label='My Progress' squareBgColor='bg-navsquare-progress'>
        <Progress />
      </NavbarItem>
    </>
  )
}

export default Navbar
