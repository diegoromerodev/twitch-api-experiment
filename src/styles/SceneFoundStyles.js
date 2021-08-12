import styled, { keyframes } from "styled-components";

const colorChange = keyframes`
    0% {
        color: #ff0933;
    }
    25% {
        color: #09f1ff;
    }
    50% {
        color: #3bff09;
    }
    75% {
        color: #ffec09;
    }
    100% {
        color: #ff0933;
    }
`;

const Counter = styled.h2`
  font-size: 6rem;
  color: #ff0933;
  position: absolute;
  top: 0;
  right: 0;
  animation: ${colorChange} 2s linear infinite;
  text-shadow: 2px 2px 0 #333;
`;

const ContainerDiv = styled.div`
  padding: 30px;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: absolute;
`;

export { Counter, ContainerDiv };
