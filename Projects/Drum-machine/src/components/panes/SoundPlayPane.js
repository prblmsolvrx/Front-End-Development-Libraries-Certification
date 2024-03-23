import React from "react";

import CurrentSoundDisplay from "../displays/CurrentSoundDisplay";
import DrumPadsPanel from "../sounds/DrumPadsPanel";
import "./SoundPlayPane.css";

const SoundPlayPane = () => {
  return (
    <div id="sound-play-pane">
      <CurrentSoundDisplay />
      <DrumPadsPanel />
    </div>
  );
};

export default SoundPlayPane;
