import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import NavLink from './navLink'
import { ApplicationConstants } from '../../_constants/application.constants'
import { DataModel } from '../../assets/data/DataModel'
import style from 'styled-components'

const navLinks = DataModel.navigationLinks;
const constants = ApplicationConstants;

const Wrapper = style.div`
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
  background: black;
  display: block;
  padding: 6px 0;
  height: 42px;
  z-index: 1;
`
const ContentWrapper = style.div`
  width: 90%;
  margin: 0 auto;
  height: 100%;
  padding: 10px 0;
`

const NavReplacement = style.div`
  display: inline-block;
  align-items: center;
`

const UserItems = style.div`
  float: right;
  color: white;
  position: absolute;
  top: 20px;
  right: 22px;
`

class NavBar extends Component {
  renderNavLinks = () => {
    return navLinks.map(navItem => {
      return <NavLink nav={navItem} key={navItem.display} />
    })
  }
  render() {
    return (
      <Wrapper>
        <ContentWrapper className="navbarContainer">
          <Link to={constants.HOME} className="title">
            {constants.TITLE}
          </Link>
          <NavReplacement>
            <span>{this.renderNavLinks()}</span>
          </NavReplacement>
          <UserItems>
            <FontAwesomeIcon icon="bell" className="hoverItem"></FontAwesomeIcon>
            <FontAwesomeIcon icon="user" className="hoverItem"></FontAwesomeIcon>
          </UserItems>
        </ContentWrapper>
      </Wrapper>
    )
  }
}

export default NavBar