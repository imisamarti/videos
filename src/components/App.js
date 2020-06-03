import React from 'react';
import SearchBar from './SearchBar';
import config from './config';
import youtube from '../apis/youtube';

const KEY = config.access_key;

class App extends React.Component{

	onTermSubmit = (term) => {
		youtube.get('/search',{
			params:{
				q:term,part:'snippet',
				type: 'video',
				maxResults: 5,
				key: KEY
			}
		});
	};

	render(){
		return <div className='ui container'><SearchBar onTermSubmit={this.onTermSubmit}/></div>
	}
}

export default App;