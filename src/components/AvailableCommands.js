import React, { useEffect, useState } from "react";
import styled from "styled-components";

const GridDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 20px;
  justify-content: start;
  align-content: end;
  padding: 20px;
  color: #4eff00;
  font-size: 2em;
`;

const AvailableCommands = (props) => {
  const { numberOfScenes, videoValues } = props;
  const [commands, setCommands] = useState([]);

  const generateCommand = () => {
    let index = videoValues.length - 2;
    for (let i = 0; i < 4; i++) {
      index = Math.floor(Math.random() * (videoValues.length - 1));
      if (index === 5 || !index || index === 3) {
        continue;
      }
      break;
    }
    return index;
  };

  useEffect(() => {
    setInterval(() => {
      let command;
      try {
        const generatedCommands = [];
        do {
          command = generateCommand();
          const commandName = videoValues[command][0].split(".")[0];
          if (
            generatedCommands.indexOf(commandName) > -1 ||
            (command === 0 && numberOfScenes < 4) ||
            (command === 3 && numberOfScenes < 2)
          )
            continue;
          generatedCommands.push(commandName);
        } while (generatedCommands.length < 4);
        setCommands(generatedCommands);
      } catch (e) {
        console.error(e, command);
      }
    }, 10000);
  }, []);

  return (
    <GridDiv>
      <h2>háblame con:</h2>
      <h2>{!numberOfScenes ? "#saludo" : commands[0]}</h2>
      {!!numberOfScenes && (
        <>
          <h2>{commands[1]}</h2>
          <h2>{commands[2]}</h2>
          <h2>{commands[3]}</h2>
        </>
      )}
    </GridDiv>
  );
};

export default AvailableCommands;
