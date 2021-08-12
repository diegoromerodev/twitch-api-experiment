import React, { useEffect } from "react";
import tmi from "tmi.js";
import allVideos from "./importer";

const TwitchMessageListener = (props) => {
  const { setMessageInfo } = props;

  const handleMessage = (username, text) => {
    if (!allVideos[`${text}.mp4`]) return false;
    setMessageInfo((prevState) => {
      if (prevState.text) return prevState;
      allVideos[`${text}.mp4`].found = true;
      return { username, text };
    });
  };

  useEffect(() => {
    const client = new tmi.Client({
      channels: ["esdiegoromero"],
    });

    client.connect();

    client.on("message", (channel, tags, message, self) => {
      handleMessage(tags["display-name"], message);
    });
  }, []);

  return null;
};

export default TwitchMessageListener;
