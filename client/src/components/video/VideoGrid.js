import React from "react";
import VideoTile from "./VideoTile";
import styled from "styled-components";

export const VideoGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1%;
  width: 90%;
  &:first-child{
    margin-top: 8em;
  }
`;

export default function({ VideoData }) {
  console.log("video items, ", VideoData);
  return (
    <div>
      {VideoData.map(video => {
        return <VideoTile VideoId={video["id"]} />;
      })}
    </div>
  );
}
