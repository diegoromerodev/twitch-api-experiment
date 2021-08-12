import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import allVideos from "../helpers/importer";

const VideoPlayer = (props) => {
  const { filename, setMessageInfo } = props;

  return (
    <div>
      {filename && (
        <ReactPlayer
          playing
          width={`${window.innerWidth}px`}
          height={`${window.innerHeight}px`}
          url={allVideos[`${filename}.mp4`].default}
          onEnded={() => setMessageInfo({})}
          style={{ position: "absolute", zIndex: 2 }}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
