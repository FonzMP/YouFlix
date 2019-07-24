import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { DataModel } from "../../assets/data/DataModel";

const SideBarWrapper = styled.span`
  background: white;
  color: black;
  position: fixed;
  left: 0;
  width: 4%;
  height: calc(100vh - 89px);
  display: inline-block;
  box-shadow: 2px 0 2px gray;
  transition: 0.3s all ease-in;

  &.active {
    width: 200px;
    max-width: 200px;
    text-align: left;
  }
`;

const IconWrapper = styled.div`
  width: 100%;
  background: white;
  margin: 32px 0;
  text-align: center;

  &.active {
    text-align: left;
    padding-left: 18px;
    box-sizing: border-box;
  }
`;

const IconText = styled.span`
  font-size: 18px;
  margin-left: 12px;
  weight: 700;
  font-family: "Martel Sans", sans-serif;
`;

class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      interval: undefined,
      extendSidebar: false
    };
  }

  testFunction = () => {
    this.setState({
      extendSidebar: true
    });
  };

  handleHover = () => {
    if (this.state.interval === undefined) {
      this.setState({
        interval: setInterval(this.testFunction, 1000)
      });
    }
  };

  disengageHover = () => {
    clearInterval(this.state.interval);
    this.setState({
      interval: undefined,
      extendSidebar: false
    });
  };
  renderIconWrappers = () => {
    return DataModel.sideBarContext.map(item => {
      return (
        <IconWrapper
          className={this.state.extendSidebar ? "active" : ""}
          key={item.display}
        >
          <FontAwesomeIcon icon={item.icon} size="2x" />
          {this.state.extendSidebar ? (
            <IconText>{item.display}</IconText>
          ) : null}
        </IconWrapper>
      );
    });
  };
  render() {
    return (
      <SideBarWrapper
        onMouseEnter={this.handleHover}
        onMouseLeave={this.disengageHover}
        className={this.state.extendSidebar ? "active" : ""}
      >
        {this.renderIconWrappers()}
      </SideBarWrapper>
    );
  }
}

export default SideBar;
