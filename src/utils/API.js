import axios from 'axios';

const apiKey = 'AIzaSyA_cZKZMcBG0lfkZx8X97O5GynHc308hVY';

export default {
  searchYouTube: term => {
    return axios.get("https://www.googleapis.com/youtube/v3/search", {
      params: {
        part: 'snippet',
        q: term,
        type: 'video',
        key: apiKey,
      }
    })
  }
}