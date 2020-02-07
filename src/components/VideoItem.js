import React from "react";

const VideoItem = props => {
  const { video, select } = props;

  return (
    <div
      style={{ display: "flex", flexDirection: "row", margin: "5px" }}
      onClick={() => select(video)}
    >
      <img src={video.thumbnail} alt="thumbnail" />
      <div>
        <p style={{ fontSize: "10px", padding: "3px" }}>
          {video.title}
          <br />
          {video.channelTile}
        </p>
      </div>
    </div>
  );
};

export default VideoItem;
