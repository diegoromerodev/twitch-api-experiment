import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

const spinAppear = keyframes`
  0% {
      transform: rotateY(0);
  }
  50% {
      transform: rotateY(360deg);
    }
    100% {
    transform: rotateY(360deg);
    color: transparent;
  }
`;

const UserAlert = styled.h2`
  position: absolute;
  top: 50%;
  z-index: 3;
  font-size: 5rem;
  color: #ff0011;
  opacity: 1;
  font-family: "Harrington";
  &.spin {
    animation: ${spinAppear} 6s linear;
    animation-fill-mode: forwards;
  }
`;
const SceneMessage = (props) => {
  const { username, text } = props;

  useEffect(() => {
    document.getElementById("user-alert")?.classList.add("spin");
  }, [props]);

  return (
    <>
      {text && (
        <UserAlert id="user-alert">
          {username}: {text}
        </UserAlert>
      )}
    </>
  );
};

export default SceneMessage;
