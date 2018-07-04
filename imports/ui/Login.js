import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {
  render () {
    return (
      <div>
        <h1>Login to Short Lnk</h1>
        Login Form Here
        <Link to='/signup'>Don't have an account?</Link>
      </div>
    )
  }
}
export default Login
