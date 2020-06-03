import React from 'react';

class SearchBar extends React.Component{
	state={term:''};

	onInputChange= (event) => {
		this.setState({term: event.target.value});
	};

	render(){
		return(
			<div className='ui segment'>
			<form onSubmit={this.onFormSubmit} className="ui fluid category search">
			<div className="ui icon input">
			<input onChange={this.onInputChange} value={this.state.term} className="prompt" type="text" placeholder="Search videos..."/>
			<i className="search icon"></i>
			</div>
			<div className="results"></div>
			</form>
			</div>
			) 
	}
}

export default SearchBar;