import React from "react";
import VideoTile from "./VideoTile";
import styled from "styled-components";

export const VideoGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  grid-gap: 8%;
  width: 90%;
  &:first-child{
    margin-top: 10em;
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
