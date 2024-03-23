import React, { useContext } from "react";

import SoundContext from "../../context/sound/soundContext";
import "./CurrentSoundDisplay.css";

const CurrentSoundDisplay = () => {
  const soundContext = useContext(SoundContext);
  const { currentSound } = soundContext;

  return <div id="display">{(currentSound && currentSound.name) || "---"}</div>;
};

export default CurrentSoundDisplay;
