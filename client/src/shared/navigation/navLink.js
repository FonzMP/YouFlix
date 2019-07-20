import React, { Component } from 'react'

class NavLink extends Component {
  render() {
    console.log('props ', this.props.nav)
    return (
      <span>{this.props.nav.href !== "" ? <a href="{this.props.nav.href}">{this.props.nav.display}</a> : <span>{this.props.nav.display}</span>}</span>
    )
  }
}

export default NavLink