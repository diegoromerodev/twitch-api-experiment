import React from "react";
import ObsWebSocket from "obs-websocket-js";
import Countdown from "react-countdown";
import styled from "styled-components";

const StyledCountdown = styled.h2`
  position: absolute;
  left: 0;
  top: 360px;
  color: #19f4f1;
  font-size: 2rem;
`;

const CountdownClock = () => {
  const endStream = () => {
    const obs = new ObsWebSocket();
    obs.connect({ address: "localhost:4444", password: "1234" }).then(() => {
      obs
        .send("StopStreaming", null, console.log)
        .then(() => {
          obs.disconnect();
        })
        .catch((err) => console.log(err));
    });
  };

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <StyledCountdown>
        {hours}h:{minutes}m:{seconds}s
      </StyledCountdown>
    );
  };

  return (
    <Countdown
      renderer={renderer}
      onComplete={endStream}
      date={new Date().setHours(24)}
    />
  );
};

export default CountdownClock;
