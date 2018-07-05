import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Signup extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: ''
    }
  }

  onSubmit (e) {
    e.preventDefault()

    this.setState({
      error: 'Something went wrong!'
    })
  }

  render () {
    return (
      <div>
        <h1>Join Short Lnk</h1>
        {this.state.error ? <p>{this.state.error}</p> : undefined}
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type='email' name='email' placeholder='Email' />
          <input type='password' name='password' placeholder='Password' />
          <button>Create Account</button>
        </form>
        <Link to='/'>Already have an account!</Link>
      </div>
    )
  }
}
export default Signup
