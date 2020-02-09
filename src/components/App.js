import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import Video from "./Video";
import Footer from "./Footer";
import styled from "styled-components";

const Result = styled.div`
  min-height: 70vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (min-width: 550px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

// const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

class App extends React.Component {
  state = {
    searchTerm: "",
    videos: [],
    selectedVideo: null,
    err: false
  };

  handleVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${this.state.searchTerm}&key=AIzaSyAg3PEzIxZFKKAR_zSUbVnO5o9CAVnHDns&limit=5`;

    fetch(URL)
      .then(response => {
        if (response.ok) {
          return response;
        }
        throw Error("Cannot connect with server");
      })
      .then(response => response.json())
      .then(data => {
        let videoList = [];
        data.items.forEach(item => {
          const video = {
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.default.url,
            channelTitle: item.snippet.channelTitle
          };
          videoList.push(video);
        });
        this.setState({
          videos: videoList,
          selectedVideo: videoList[1],
          searchTerm: ""
        });
      })
      .catch(err => {
        this.setState(prevState => ({
          err: true
        }));
      });
  };

  render() {
    const { videos, searchTerm, selectedVideo, err } = this.state;

    return (
      <>
        <Header />
        <SearchBar
          submit={this.handleSubmit}
          value={searchTerm}
          change={this.handleChange}
        />
        <Result>
          <Video video={selectedVideo} err={err} />
          <VideoList
            videos={videos}
            err={err}
            select={this.handleVideoSelect}
          />
        </Result>
        <Footer />
      </>
    );
  }
}

export default App;
