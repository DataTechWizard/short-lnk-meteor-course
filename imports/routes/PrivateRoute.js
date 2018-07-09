import { Meteor } from 'meteor/meteor'
import React from 'react'
// import { createContainer } from 'meteor/react-meteor-data'
import { Route, Redirect } from 'react-router-dom'
import { withTracker } from 'meteor/react-meteor-data'

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route {...rest} render={(props) => (
    isAuthenticated ? (
      <Component {...props} />
    ) : (
      <Redirect to='/' />
    )
  )} />
)

// export default createContainer(() => ({
//   isAuthenticated: !!Meteor.userId()
// }), PrivateRoute)

export default withTracker(props => {
  // Do all your reactive data access in this method.
  // Note that this subscription will get cleaned up when your component is unmounted
  const isAuthenticated = !!Meteor.userId()
  return {
    currentUser: Meteor.userId(),
    isAuthenticated: isAuthenticated
  }
})(PrivateRoute)
