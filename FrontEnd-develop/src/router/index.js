import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import routesConfig from './routes'

const AppRoute = ({ layout: Layout, ...rest }) => (
  <Layout>
    <Route {...rest} />
  </Layout>
)

const Router = () => (
  <BrowserRouter>
    <Switch>
      {routesConfig.map((route) => (
        <AppRoute
          key={route.path || 'notFound'}
          exact={route.exact}
          path={route.path}
          component={route.component}
          layout={route.layout}
        />
      ))}
    </Switch>
  </BrowserRouter>
)

export default Router
