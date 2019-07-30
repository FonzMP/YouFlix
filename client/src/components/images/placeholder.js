import React, { Component } from "react";
import style from "styled-components";

const Images = style.img`
    display: inline-block;
    width: auto;
    margin: 12px 2px;
    transition: transform 0.3s;
    &:hover{
      transform: scale(1.15);
    }
`;



class PlaceHolder extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <span>
        <Images src={this.props.video.snippet.thumbnails.medium.url}/>
      </span>
    );
  }
}

export default PlaceHolder;
