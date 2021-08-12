import React, { useState } from "react";
import TwitchMessageListener from "../helpers/TwitchMessageListener";
import IntroScene from "./IntroScene";
import SceneMessage from "./SceneMessage";
import ScenesFound from "./ScenesFound";
import VideoPlayer from "./VideoPlayer";

const App = () => {
  const [messageInfo, setMessageInfo] = useState({});
  return (
    <div>
      <SceneMessage username={messageInfo.username} text={messageInfo.text} />
      <ScenesFound />
      <TwitchMessageListener
        messageInfo={messageInfo}
        setMessageInfo={setMessageInfo}
      />
      {messageInfo.text && (
        <VideoPlayer
          filename={messageInfo.text}
          setMessageInfo={setMessageInfo}
        />
      )}
      <IntroScene messageInfo={messageInfo} />
    </div>
  );
};

export default App;
