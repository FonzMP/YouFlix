import React, { Component } from 'react'
import NavLink from './navLink'
import { ApplicationConstants } from '../../_constants/application.constants'
import { DataModel } from '../../assets/data/DataModel'
import style from 'styled-components'

const navLinks = DataModel.navigationLinks;
const constants = ApplicationConstants;
const ContentWrapper = style.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`
const Title = style.h2`
  display: inline-block;
  color: rgba(229, 9, 20, 1);
`

class NavBar extends Component {
  renderNavLinks = () => {
    return navLinks.map(navItem => {
      return <NavLink nav={navItem} key={navItem.display} />
    })
  }
  render() {
    return (
      <ContentWrapper className="navbarContainer">
        <Title id="applicationTitle">{constants.TITLE}</Title>
        <nav>
          <span>{this.renderNavLinks()}</span>
        </nav>
      </ContentWrapper>
    )
  }
}

export default NavBar