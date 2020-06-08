import React from 'react';
import './VideoItem.css';

//uses callback function "onVideoSelect"
// to pass info to parent "VideoList"
const VideoItem = ({video, onVideoSelect}) => {
	return (
		<div onClick={() => onVideoSelect(video)} className='video-item item'>
		<img alt={video.snippet.title} className='ui image' src={video.snippet.thumbnails.medium.url}/>
		<div className='content'><div className='header'>{video.snippet.title}</div></div>
		</div>
		)
	};

	export default VideoItem;