import React, { Component } from 'react'

export default class Lnk extends Component {
  render () {
    return (
      <div>
        <button onClick={() => { this.props.history.push('/') }}>
        Logout
        </button>
      </div>
    )
  }
}
