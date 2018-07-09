import { Meteor } from 'meteor/meteor'
import React from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { Route, Redirect } from 'react-router-dom'

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route {...rest} render={(props) => (
    isAuthenticated ? (
      <Redirect to='/dashboard' />
    ) : (
      <Component {...props} />
    )
  )} />
)

export default withTracker(props => {
  // Do all your reactive data access in this method.
  // Note that this subscription will get cleaned up when your component is unmounted
  const isAuthenticated = !!Meteor.userId()
  return {
    currentUser: Meteor.userId(),
    isAuthenticated: isAuthenticated
  }
})(PublicRoute)
