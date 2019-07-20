import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavLink extends Component {
  render() {
    return (
      <Link to={this.props.nav.href} className={this.props.nav.display === "Home" ? 'first navLink' : 'navLink'}>{this.props.nav.display}</Link>
    )
  }
}

export default NavLink