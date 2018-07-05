import React, { Component } from 'react'

export default class Lnk extends Component {
  render () {
    return (
      <div>
        <h1>Short Lnk Links</h1>
        <button onClick={() => { this.props.history.push('/') }}>
        Logout
        </button>
      </div>
    )
  }
}
