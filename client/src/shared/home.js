import React from "react";
import VideoGrid from "../components/video/VideoGrid";
import PlaceHolder from "../components/images/placeholder";
import { ApplicationConstants } from "../_constants/application.constants";
import { VideoServices } from "../services/video.services";
import { VideoGridStyled } from "../components/video/VideoGrid"

const c = ApplicationConstants;
export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      videos: undefined
    };
  }

  componentDidMount() {
    this.fetchVideos();
  }
  //ISO CODE for USA - US 840
  //OPTIMAL VIDEO SIZE FOR GRID
  //<iframe width="360" height="215" src="https://www.youtube.com/embed/${VIDEO_ID_INSERT}" frameborder="20" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  fetchVideos() {
    return VideoServices.getYouTubeVideos().then(response => {
      this.setState({
        videos: response,
        loading: false
      });
    });
  }

  renderPlaceholders = () => {
    return this.state.videos.items.map(video => {
      return <PlaceHolder video={video} />;
    });
  };

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div>loading.....</div>
        ) : (
          <VideoGridStyled>{this.state.videos ? this.renderPlaceholders() : null}</VideoGridStyled>
        )}
      </div>
    );
  }
}
