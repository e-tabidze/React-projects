import Loadable from 'react-loadable'

import Default from '../components/Layout'
import Clean from '../components/Layout/Clean'
import CleanBlue from '../components/Layout/CleanBlue'
import CleanColored from '../components/Layout/CleanColored'
import Loader from '../components/Loader'

import {
  userIsAuthenticatedRedir,
  userIsNotAuthenticatedRedir,
  userIsAdmin,
  userIsCandidate,
  userIsEmployee,
} from '../components/hoc/Auth'

const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'Home' */ '../pages/Home'),
  loading: Loader,
  delay: 100,
})

const LoadableLogin = Loadable({
  loader: () => import(/* webpackChunkName: 'Login' */ '../pages/Login'),
  loading: Loader,
  delay: 100,
})

const LoadableRequestReset = Loadable({
  loader: () => import(/* webpackChunkName: 'RequestReset' */ '../pages/RequestNewPassword'),
  loading: Loader,
  delay: 100
})

const LoadableResetPassword = Loadable({
  loader: () => import(/* webpackChunkName: 'ResetPassword' */ '../pages/Reset'),
  loading: Loader,
  delay: 100
})

const LoadableSignUp = Loadable({
  loader: () => import(/* webpackChunkName: 'SignUp' */ '../pages/SignUp'),
  loading: Loader,
  delay: 100,
})

const LoadableConfirmAccount = Loadable({
  loader: () => import(/* webpackChunkName: 'ConfirmAccount' */ '../pages/ConfirmAccount'),
  loading: Loader,
  delay: 100
})

const LoadableSetGoals = Loadable({
  loader: () => import(/* webpackChunkName: 'ConfirmAccount' */ '../pages/SetGoals'),
  loading: Loader,
  delay: 100
})

const LoadableWall = Loadable({
  loader: () => import(/* webpackChunkName: 'Wall' */ '../pages/Wall'),
  loading: Loader,
  delay: 100,
})

const LoadableLearn = Loadable({
  loader: () => import(/* webpackChunkName: 'Learn' */ '../pages/Learn'),
  loading: Loader,
  delay: 100,
})

const LoadableQualities = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'Qualities' */ '../pages/Qualities'),
  loading: Loader,
  delay: 100,
})

const LoadableHub = Loadable({
  loader: () => import(/* webpackChunkName: 'Hub' */ '../pages/Hub'),
  loading: Loader,
  delay: 100,
})

const LoadableGroups = Loadable({
  loader: () => import(/* webpackChunkName: 'Groups' */ '../pages/Groups'),
  loading: Loader,
  delay: 100,
})

const LoadableInterviews = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'Interviews' */ '../pages/Interviews'),
  loading: Loader,
  delay: 100,
})

const LoadableProfile = Loadable({
  loader: () => import(/* webpackChunkName: 'Profile' */ '../pages/Profile'),
  loading: Loader,
  delay: 100,
})

const LoadableProgress = Loadable({
  loader: () => import(/* webpackChunkName: 'Progress' */ '../pages/Progress'),
  loading: Loader,
  delay: 100,
})



const routesConfig = [
  // home
  {
    path: '/',
    exact: true,
    component: userIsAuthenticatedRedir(LoadableHome),
    layout: Default,
  },

  {
    path: '/login',
    exact: true,
    component: userIsNotAuthenticatedRedir(LoadableLogin),
    layout: Clean
  },

  {
    path: '/request-reset',
    exact: true,
    component: LoadableRequestReset,
    layout: Clean
  },

  {
    path: '/reset-password',
    exact: true,
    component: LoadableResetPassword,
    layout: Clean
  },

  {
    path: '/confirm/:token',
    exact: true,
    component: LoadableConfirmAccount,
    layout: CleanBlue
  },

  {
    path: '/signup',
    exact: true,
    component: userIsNotAuthenticatedRedir(LoadableSignUp),
    layout: Clean
  },

  {
    path: '/setgoals',
    exact: true,
    component: userIsNotAuthenticatedRedir(LoadableSetGoals),
    layout: Clean
  },

  {
    path: '/wall',
    exact: true,
    component: LoadableWall,
    layout: Default,
  },
  
  {
    path: '/learn',
    exact: true,
    component: LoadableLearn,
    layout: Default,
  },
  
  {
    path: '/qualities',
    exact: true,
    component: LoadableQualities,
    layout: Default,
  },
  
  {
    path: '/hub',
    exact: true,
    component: LoadableHub,
    layout: Default,
  },
  
  {
    path: '/groups',
    exact: true,
    component: LoadableGroups,
    layout: Default,
  },

  {
    path: '/interviews',
    exact: true,
    component: LoadableInterviews,
    layout: Default,
  },

  {
    path: '/profile',
    exact: true,
    component: LoadableProfile,
    layout: Default,
  },

  {
    path: '/progress',
    exact: true,
    component: LoadableProgress,
    layout: Default,
  }

]

export default routesConfig
