import React, { useContext } from "react";

import CurrentTrackItem from "./CurrentTrackItem";
import SoundContext from "../../context/sound/soundContext";
import "./CurrentTrackDisplay.css";

const CurrentTrackDisplay = () => {
  const soundContext = useContext(SoundContext);
  const { currentSound, currentTrack } = soundContext;

  const limitReached = currentTrack.length > 9;

  return (
    <div
      className={`played-sounds-display ${limitReached ? "limit-reached" : ""}`}
    >
      {currentTrack.length === 0
        ? "---"
        : currentTrack.map(sound => (
            <CurrentTrackItem
              key={sound.id}
              name={sound.name}
              isPlayed={
                currentSound && currentSound.id === sound.id ? true : false
              }
            />
          ))}
    </div>
  );
};

export default CurrentTrackDisplay;
