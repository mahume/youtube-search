import React, { Fragment } from 'react';

const VideoDetail = ({ selectedVideo }) => {
  if (!selectedVideo) return <h2>Loading</h2>;
  
  const videoId = selectedVideo.id.videoId;
  const videoUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;
  
  return (
    <Fragment>
      <div className="embed-responsive embed-responsive-16by9">
        <iframe 
          title={selectedVideo.snippet.title}
          src={videoUrl} 
          className="embed-responsive-item" 
          allowFullScreen
        ></iframe>
      </div>
      <div>
        <h2>{selectedVideo.snippet.title}</h2>
        <h4>{selectedVideo.snippet.description}</h4>
      </div>
    </Fragment>
  )
}

export default VideoDetail;