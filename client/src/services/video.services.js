import { ApplicationConstants } from "../_constants/application.constants";

const c = ApplicationConstants;

export const videoServices = {
  getYouTubeVideos
};

function getYouTubeVideos() {
  return fetch(c.YOUTUBE_API + process.env.REACT_APP_YOUTUBE_KEY)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.log("error during getYoutubeVideos"));
}
