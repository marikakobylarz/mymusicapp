import React from "react";
import styled from "styled-components";
import play from "../images/play.png";

// const Container = styled.div`

// `;

const VideoDiv = styled.div`
  text-align: center;
`;
const Iframe = styled.iframe`
  margin: 3% auto;
  width: 80vw;
  height: 60vw;

  @media only screen and (min-width: 550px) {
    width: 54vw;
    height: 30vw;
    margin: 3%;
  }
`;

const Label = styled.div`
  margin: 3%;
  text-align: center;

  @media only screen and (min-width: 550px) {
    width: 54vw;
  }
`;

const Welcome = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  margin: 0 auto;
`;
const Video = props => {
  if (!props.video)
    return (
      <Welcome>
        Welcome to{" "}
        <span style={{ fontFamily: "Gochi Hand", fontSize: "22px" }}>
          MyMusicApp
        </span>
      </Welcome>
    );
  else if (props.err) return <Welcome>Sorry...No matching data :( </Welcome>;

  const videoSrc = `https://www.youtube.com/embed/${props.video.id}`;

  return (
    <VideoDiv>
      <Iframe
        src={videoSrc}
        title="Video Player"
        frameBorder="0"
        allowFullScreen="allowfullscreen"
      ></Iframe>
      <Label>
        <h2 style={{ fontSize: "15px" }}>{props.video.title}</h2>
        <p
          style={{
            fontSize: "12px",
            lineHeight: "20px",
            color: "#999"
          }}
        >
          {props.video.channelTitle}{" "}
          <a href={videoSrc} style={{ height: "18px" }}>
            <img
              style={{
                height: "20px",
                margin: "0 auto",
                textAlign: "center"
              }}
              src={play}
              alt="youtube"
            />
          </a>
        </p>
      </Label>
    </VideoDiv>
  );
};

export default Video;
