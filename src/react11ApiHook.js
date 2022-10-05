import ReactDom from "react-dom/client"
import React, {useState, useEffect} from 'react';
import unsplash from "./data/youtubeApi";

const element = document.getElementById("root")
const root = ReactDom.createRoot(element)

const SearchBar = ({ onFormSubmit }) => {
	const [term, setTerm] = useState('')

	const onSubmit = event => {
		event.preventDefault();

		onFormSubmit(term);
	};

	return (
		<div className='search-bar ui segment'>
			<div className='logo-container'>
				<h1>Search Here</h1>
			</div>
			<form onSubmit={onSubmit} className='ui-form'>
				<div className='field'>
        <label htmlFor="video-search">Video Search</label>
					<input
						type='text'
						value={term}
						onChange={(event) => setTerm(event.target.value)}
					/>
				</div>
			</form>
		</div>
	);
}

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading Videos...</div>;
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div>
			<div className='ui embed'>
        <iframe src={videoSrc} allowFullScreen title='Video player'/>
			</div>
			<div className='ui segment'>
				<h2 className='ui header'>{video.snippet.title}</h2>
				<p>{video.snippet.description}</p>
			</div>
		</div>
	);
};

const VideoItem = ({ video, onVideoSelect }) => {
	return (
		<div onClick={() => onVideoSelect(video)} className='video-item item'>
			<img
				className='ui image'
				src={video.snippet.thumbnails.medium.url}
				alt={video.snippet.title}
			/>
			<div className='content'>
				<h3 className='header'>{video.snippet.title}</h3>
			</div>
		</div>
	);
};

const VideoList = ({ videos, onVideoSelect }) => {
	const renderedList = videos.map(video => {
		return (
			<VideoItem
				key={video.id.videoId}
				onVideoSelect={onVideoSelect}
				video={video}
			/>
		);
	});

	return <div className='video-previews-list'>{renderedList}</div>;
};

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
		search(defaultSearchTerm);
	}, [defaultSearchTerm]);

  const search = async term => {
		const response = await unsplash.get('/search', {
      params: {
        q: term
      }
		});

		setVideos(response.data.items);
	};

  return [videos, search];
};

const App = () => {	
	const [selectedVideo, setSelectedVideo] = useState(null);
	const [videos, search] = useVideos('react js custom hooks');

	useEffect(() => {
		setSelectedVideo(videos[0]);
	}, [videos]);

	return (
    <div className='ui container' style={{marginTop: '1em'}}>
			<SearchBar onFormSubmit={search} />
			<div className='ui grid'>
				<div className='ui row'>
          <div className="eleven wide column">
					  <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
					<VideoList
						onVideoSelect={setSelectedVideo}
						videos={videos}
					/>
				</div>
				</div>

			</div>
		</div>
	);
};

root.render(<App />)