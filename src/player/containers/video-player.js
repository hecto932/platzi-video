import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'
import { formattedTime } from '../../lib/utils'
import ProgressBar from '../components/progress-bar'
import Spinner from '../components/spinner'
import Volume from '../components/volume'

class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
    durationFormatted: '',
    currentTimeFormatted: '',
    loading: false
  }
  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }
  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }
  handleLoadedMetadata = event => {
    this.video = event.target
    this.setState({
      durationFormatted: formattedTime(this.video.duration),
      duration: this.video.duration
    })
  }
  handleTimeUpdate = event => {
    this.setState({
      currentTimeFormatted: formattedTime(this.video.currentTime),
      currentTime: this.video.currentTime
    })
  }
  handleProgressChange = event => {
    // Cambiamos el tiempo de transcurso del video
    this.video.currentTime = event.target.value
  }
  handleSeeking = (event) => {
    this.setState({
      loading: true
    })
  }
  handleSeeked = (event) => {
    this.setState({
      loading: false
    })
  }
  handleVolumeChange = (event) => {
    this.video.volume = event.target.value
  }
  handleVolumeClick = (event) => {
    
  }
  render () {
    return (
      <VideoPlayerLayout>
        <Title
          title="Esto es un video chido..."
        />
        <Controls>
          <PlayPause
            pause={this.state.pause} 
            handleClick={this.togglePlay}
          />
          <Timer
            duration={this.state.durationFormatted}
            currentTime={this.state.currentTimeFormatted}
          />
          <ProgressBar 
            duration={this.state.duration}
            value={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
            handleVolumeClick={this.handleVolumeClick}
            handleVolumeChange={this.handleVolumeChange}
          />
        </Controls>
        <Spinner 
          active={this.state.loading}
        />
        <Video
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
        />
      </VideoPlayerLayout> 
    )
  }
}

export default VideoPlayer