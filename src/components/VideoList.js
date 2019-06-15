import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding-left: 0;
`
const ListItem = styled.li`
  margin-bottom: 1em;
  text-align: right;
  img {
    border: ${props => props.active ? '5px solid red' : '2px solid gray'};
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      border-color: red;
    }
  }
`

const VideoList = ({ children }) => {
  return (
    <List>{children}</List>
  )
}

const VideoListItem = ({ video, selectedVideo, onVideoSelect }) => {
  return (
    <ListItem 
      active={video === selectedVideo}
      onClick={() => onVideoSelect(video)}
    >
      <img 
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
    </ListItem>
  )
}

export { VideoList, VideoListItem };