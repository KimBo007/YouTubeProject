import React, {Component} from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    //console.log(video);
    return(
      <VideoListItem 
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video} />
      
      )
  });
  
  return(
    <div className="space">
    <ul className="col-md-4 list-group">
        {videoItems}
      </ul>
     </div>
    );
};

export default VideoList;