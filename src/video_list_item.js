import React from 'react';

const VideoListItem =({video, onVideoSelect}) => {
  const VideoTumbnailURL = video.snippet.thumbnails.default.url;
  
 return (
   <li onClick={()=> onVideoSelect(video)} className="list-group-item space_small">
     <div className="video-list media video-item">
       <div className="media-left">
         <img className="media-object" src={VideoTumbnailURL}/>
       </div>
       <div className="media-body">
         <div className="media-heading">{video.snippet.title}</div>
       </div>
     </div>
   </li>
   )
};

export default VideoListItem;