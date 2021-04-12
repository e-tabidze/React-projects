import React from 'react'
import { Redirect } from 'react-router-dom'

import useMe from '../../hooks/useMe'

const userIsAuthenticatedRedir = WrappedComponent => () => {
  const { me } = useMe()
  if (!me) return <Redirect to="/login" />
  return <WrappedComponent />
}

const userIsNotAuthenticatedRedir = WrappedComponent => () => {
  const { me } = useMe()
  if (me) return <Redirect to="/" />
  return <WrappedComponent />
}

const userIsAdmin = WrappedComponent => () => {
  const { me } = useMe()
  if (me.role === 'admin') return <WrappedComponent />
  return <Redirect to="/" />
}

const userIsCandidate = WrappedComponent => () => {
  const { me } = useMe()
  if (me.role === 'candidate' || me.role === 'admin') return <WrappedComponent />
  return <Redirect to="/" />
}

const userIsEmployee = WrappedComponent => () => {
  const { me } = useMe()
  if (me.role === 'employee' || me.role === 'admin') return <WrappedComponent />
  return <Redirect to="/" />
}

export {
  userIsAuthenticatedRedir, userIsNotAuthenticatedRedir, userIsAdmin, userIsCandidate, userIsEmployee
}
