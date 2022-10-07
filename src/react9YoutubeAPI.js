import React from 'react';
import ReactDom from "react-dom/client"
import unsplash from "./data/youtubeApi";

const element = document.getElementById("root")
const root = ReactDom.createRoot(element)

class Searchbar extends React.Component {
  state = {
    term: ""
  };
  handleChange = (event) => {
    this.setState({
      term: event.target.value
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  }

  render() {
    return (
      <div className='search-bar ui segment'>
        <form onSubmit={this.handleSubmit} className='ui form'>
          <div className='field'>
            <label htmlFor="video-search">Video Search</label>
            <input 
              onChange={this.handleChange} 
              name='video-search' 
              type="text" 
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    )
  }
}

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>.. Please search a video first</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className='ui embed'>
        <iframe src={videoSrc} allowFullScreen title='Video player'/>
      </div>
      <div className='ui segment'>
        <h4 className='ui header'>{video.snippet.title}</h4>
      </div>
    </div>
  )
}

const VideoItem = ({video , handleVideoSelect}) => {
  return (
    <div onClick={ () => handleVideoSelect(video)} className=' video-item item'>
      <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
      <div className='content'>
        <div className='header '>{video.snippet.title}</div>
      </div>
    </div>
  )
};

const VideoList = ({videos , handleVideoSelect}) => {
  const renderedVideos =  videos.map((video) => {
    return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
  });
  return <div className='ui relaxed divided list'>{renderedVideos}</div>;
};

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  }
  handleSubmit = async (termFromSearchBar) => {
    const response = await unsplash.get('/search', {
      params: {
        q: termFromSearchBar
      }
    })
    this.setState({
      videos: response.data.items
    })
  };
  handleVideoSelect = (video) => {
    this.setState({selectedVideo: video})
  }

  render() {
    return (
      <div className='ui container' style={{marginTop: '1em'}}>
        <Searchbar handleFormSubmit={this.handleSubmit}/>
        <div className='ui grid'>
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
              <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
  
root.render(<App />)