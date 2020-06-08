import React from 'react';

const VideoDetail = ({video}) => {
	if(!video){
		return <div></div>
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

	return (
		<div>
	<div className="ui embed">
	<iframe title="Video Player" src={videoSrc} />
	</div>
	<div className="ui segment"> 
	<div className="ui header">
	<h2 className="ui header">{video.snippet.title}</h2>
	<p className="sub header">{video.snippet.description}</p>
	</div>
	</div>
	</div>
	);
};

export default VideoDetail;