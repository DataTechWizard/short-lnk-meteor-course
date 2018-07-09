// import { Meteor } from 'meteor/meteor'
import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
// import { Session } from 'meteor/session'

import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
import Signup from '../ui/Signup'
// import Dashboard from '../ui/Dashboard'
import NotFound from '../ui/NotFound'
import Login from '../ui/Login'
import Lnk from '../ui/Lnk'

export const history = createHistory()

export const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <PublicRoute path='/' component={Login} exact />
      <PublicRoute path='/signup' component={Signup} />
      {/* <PrivateRoute path='/dashboard' component={Dashboard} exact /> */}
      {/* <PrivateRoute path='/dashboard/:id' component={Dashboard} /> */}
      <PrivateRoute path='/links' component={Lnk} exact />
      <Route path='*' component={NotFound} />
    </Switch>
  </Router>
)
