import React from 'react';

const VideoDetail = ({video}) =>{
  if(!video){
   return <div>loading...</div>; 
  }
  
  const videoID = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoID}`;
  
  return(
    <div className="video-detail col-md-8">
      <div className="embed-resposnive " >
        <iframe className="embed-resposnive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div className="small-font">{video.snippet.description}</div>
      </div>
    </div>
    )
};

export default VideoDetail;