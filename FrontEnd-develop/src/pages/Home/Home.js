import React from 'react'
import { Redirect } from 'react-router-dom'

//import { useMe } from 'hooks'
import useMe from '../../hooks/useMe'

const Home = () => {
  //const { me } = useMe()
  const me = { role: 'candidate' } 

  if (me.role === 'candidate') {
    return <Redirect to="/wall" />
  }
  if (me.role === 'employee') {
    return <Redirect to="/emloyee" />
  }

  return null
}

export default Home
