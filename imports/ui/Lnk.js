import React, { Component } from 'react'
import { Accounts } from 'meteor/accounts-base'

export default class Lnk extends Component {
  onLogout () {
    Accounts.logout()
  }

  render () {
    return (
      <div>
        <h1>Short Lnk Links</h1>
        <button onClick={this.onLogout.bind(this)}>
        Logout
        </button>
      </div>
    )
  }
}

// { this.props.history.push('/') }
