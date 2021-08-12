import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import allVideos from "../helpers/importer";

const IntroContainer = styled.div`
  width: ${() => `${window.innerWidth}px`};
  height: ${() => `${window.innerHeight}px`};
  z-index: 1;
`;

const TopLeft = styled(ReactPlayer)`
  position: absolute;
  top: 0;
  left: 0;
  width: 20%;
`;

const IntroScene = (props) => {
  const { messageInfo } = props;
  return (
    <IntroContainer>
      <TopLeft
        volume={messageInfo.text ? 0 : 1}
        url={allVideos["dormir.mp4"].default}
        playing
        loop
      />
      <ReactPlayer
        volume={messageInfo.text ? 0 : 1}
        width="100%"
        height="100%"
        playing
        url="https://www.twitch.tv/chillhopmusic"
      />
    </IntroContainer>
  );
};

export default IntroScene;
