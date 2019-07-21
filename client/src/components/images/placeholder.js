import React, { Component } from "react";
import style from "styled-components";

const Images = style.div`
    display: inline-block;
    width: auto;
    margin: 12px 2px;
`;

class PlaceHolder extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <span>
        <Images>
          <img src={this.props.video.snippet.thumbnails.medium.url} />
        </Images>
      </span>
    );
  }
}

export default PlaceHolder;
