import { ApplicationConstants } from "../_constants/application.constants";

const c = ApplicationConstants;

export const VideoServices = {
  getYouTubeVideos
};

function getYouTubeVideos() {
  return fetch(c.YOUTUBE_API + process.env.REACT_APP_YOUTUBE_KEY)
    .then(response => response.json())
    .then(data => {
      console.log(
        "data.videoData",
        data.items[0].snippet.thumbnails.medium.url
      );
      return data;
    });
}
