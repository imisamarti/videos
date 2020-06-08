import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import config from './config';
import youtube from '../apis/youtube';

const KEY = config.access_key;

class App extends React.Component{

	state = {videos:[], selectedVideo: null};

	componentDidMount(){
		this.onTermSubmit('cats');
	}

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

		this.setState({
			videos:response.data.items,
			selectedVideo:response.data.items[0]
		});
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
		<div className='ui grid'>
		<div className="ui row">
		<div className="eleven wide column">
		<VideoDetail video={this.state.selectedVideo}/>
		</div>
		<div className="five wide column">
		<VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
		</div>
		</div>
		</div>
		</div>
		)
	}
}

export default App;