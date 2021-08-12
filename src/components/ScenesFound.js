import React from "react";
import styled, { keyframes } from "styled-components";
import allVideos from "../helpers/importer";
import { ContainerDiv, Counter } from "../styles/SceneFoundStyles";
import AvailableCommands from "./AvailableCommands";
import unnamed from "../assets/unnamed.jpg";
import CountdownClock from "./CoundownClock";

const spin = keyframes`
    from {
        transform: rotateY(360deg);
    }
    to {
        transform: rotateY(0);
    }
`;

const ProfilePicture = styled.img`
  display: block;
  position: absolute;
  bottom: 100px;
  right: 50px;
  width: 150px;
  animation: ${spin} 2s linear backwards infinite;
`;

const ScenesFound = () => {
  const videoValues = Object.entries(allVideos);
  const numberOfScenes = videoValues.reduce((acc, curr) => {
    if (curr[1].found) return acc + 1;
    return acc;
  }, 0);

  return (
    <ContainerDiv>
      <CountdownClock />
      <Counter>
        {numberOfScenes}/{videoValues.length - 1}
      </Counter>
      <AvailableCommands
        numberOfScenes={numberOfScenes}
        videoValues={videoValues}
      />
      <ProfilePicture src={unnamed} />
    </ContainerDiv>
  );
};

export default ScenesFound;
