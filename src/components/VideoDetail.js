import React from 'react';

const VideoDetail = ({video}) => {
	if(!video){
		return <div></div>
	}

	return (
	<div className="ui segment"> 
	<div className="ui header">
	<h2 className="ui header">{video.snippet.title}</h2>
	<p className="sub header">{video.snippet.description}</p>
	</div>
	</div>
	);
};

export default VideoDetail;