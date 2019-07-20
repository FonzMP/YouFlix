import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.a`
  text-decoration: none;
  color: white;
  display: inline-block;
  margin-left: 16px;
  font-size: 12px;
  &.first {
    margin-left: 0;
    padding-left: 22px;
  }
`



class NavLink extends Component {
  render() {
    return (
      <Link to={this.props.nav.href} className={this.props.nav.display === "Home" ? 'first navLink' : 'navLink'}>{this.props.nav.display}</Link>
    )
  }
}

export default NavLink