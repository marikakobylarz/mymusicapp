import React from "react";
import VideoItem from "./VideoItem";
import styled from "styled-components";

const List = styled.div`
  margin: 2%;
  width: 90vw;
  // height:40vw;
  float: left;
  font-size: 14px;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #0d0d31;
    border: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgb(31, 31, 94);
    border-radius: 3px;
  }

  @media only screen and (min-width: 550px) {
    margin: 2%;
    width: 38vw;
    height: 40vw;
  }
`;

const VideoList = props => {
  const listOfVideos = props.videos.map((video, id) => (
    <VideoItem key={id} video={video} select={props.select} />
  ));

  return <div>{props.err ? <div></div> : <List>{listOfVideos}</List>}</div>;
};

export default VideoList;
