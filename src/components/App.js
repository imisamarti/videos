import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import config from './config';
import youtube from '../apis/youtube';

const KEY = config.access_key;


class App extends React.Component{

	state = {videos:[]};

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

	render(){
		return (
		<div className='ui container'><SearchBar onTermSubmit={this.onTermSubmit}/>
		<VideoList videos={this.state.videos}/>
		</div>
		)
	}
}

export default App;