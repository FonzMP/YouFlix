import React from 'react'
import VideoGrid from '../settings/VideoGrid'


export default class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        this.fetchVideos();
    }
//ISO CODE for USA - US 840
//OPTIMAL VIDEO SIZE FOR GRID 
//<iframe width="360" height="215" src="https://www.youtube.com/embed/${VIDEO_ID_INSERT}" frameborder="20" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    fetchVideos = async() => {
        const URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&chart=mostPopular&regionCode=US&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_KEY}`
        const response = await fetch(URL)
        const videoData = await response.json()
        this.setState({
            videoData: videoData['items'], 
            loading: false
        })
        console.log(videoData)
    }

    render(){
        return(
            <div>
                {this.state.loading ? <div>loading.....</div> : <VideoGrid VideoData={this.state.videoData}/>}
            </div>
        )
    }
}