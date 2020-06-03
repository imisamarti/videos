import React from 'react';

class SearchBar extends React.Component{
	state={term:''};

	render(){
		return(
			<div className='ui segment'>
			<form className="ui fluid category search">
			<div className="ui icon input">
			<input value={this.state.term} className="prompt" type="text" placeholder="Search videos..."/>
			<i className="search icon"></i>
			</div>
			<div className="results"></div>
			</form>
			</div>
			) 
	}
}

export default SearchBar;