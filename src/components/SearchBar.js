import React from 'react';

class SearchBar extends React.Component{
	state={term:''};

	onInputChange= (event) => {
		this.setState({term: event.target.value});
	};

	onFormSubmit = (event) => {
		event.preventDefault();

		this.props.onTermSubmit(this.state.term);
	};

	render(){
		return(
			<div className='ui segment'>
			<h3>Video Search</h3>
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