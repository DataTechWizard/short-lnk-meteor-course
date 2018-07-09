import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { Tracker } from 'meteor/tracker'

import Signup from '../ui/Signup'
import NotFound from '../ui/NotFound'
import Login from '../ui/Login'
import Lnk from '../ui/Lnk'

const history = createHistory()

const unathenticatedPages = ['/', '/signup']
const authenticatedPages = ['/links']

export const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path='/' component={Login} exact />
      <Route path='/signup' component={Signup} />
      <Route path='/links' component={Lnk} />
      <Route path='*' component={NotFound} />
    </Switch>
  </Router>
)

Tracker.autorun(() => {
  const isAuthenticated = !!Meteor.userId()
  const pathName = history.location.pathname
  const isUnauthenticatedPage = unathenticatedPages.includes(pathName)
  const isAuthenticatedPage = authenticatedPages.includes(pathName)

  if (isUnauthenticatedPage && isAuthenticated) {
    history.push('/links')
  } else if (isAuthenticatedPage && !isAuthenticated) {
    history.push('/')
  }
}
)
