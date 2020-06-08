import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import config from './config';
import youtube from '../apis/youtube';

const KEY = config.access_key;

class App extends React.Component{

	state = {videos:[], selectedVideo: null};

	onTermSubmit = async (term) => {
		const response = await youtube.get('/search',{
			params:{
				q:term,
				part:'snippet',
				type: 'video',
				maxResults: 5,
				key: KEY
			}
		});

		this.setState({videos:response.data.items});
	};

	//onVideoSelect is a callback function:
	//the main purpose is to pass information from child 
	//in this case "VideoItem"
	//up ^ to the parent which is "App"
	onVideoSelect = (video) => {
		this.setState({selectedVideo:video});
	}

	render(){
		return (
		<div className='ui container'><SearchBar onTermSubmit={this.onTermSubmit}/>
		<VideoDetail video={this.state.selectedVideo}/>
		<VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
		</div>
		)
	}
}

export default App;