import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import _ from 'lodash';
import API from './utils/API';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import { VideoList, VideoListItem } from './components/VideoList';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount() {
    this.searchYouTube('JavaScript');
  }

  onVideoSelect = selectedVideo => {
    this.setState({ selectedVideo })
  }

  searchYouTube = term => {
    API.searchYouTube(term)
    .then(res => this.setState({
      videos: res.data.items,
      selectedVideo: res.data.items[0],
    }))
    .catch(err => console.log(err));    
  }

  throttledSearch = _.debounce(this.searchYouTube, 600);

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Debounce search</h1>
            <SearchBar
              searchYouTube={this.throttledSearch}
            />
          </Col>
        </Row>
        <Row>
          <Col md='8'>
            <VideoDetail 
              selectedVideo={this.state.selectedVideo}
            />
          </Col>
          <Col md='4'>
            <VideoList>
              {this.state.videos.map(video => (
                <VideoListItem 
                  key={video.id.videoId}
                  video={video}
                  selectedVideo={this.state.selectedVideo}
                  onVideoSelect={this.onVideoSelect}
                />
              ))}
            </VideoList>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;