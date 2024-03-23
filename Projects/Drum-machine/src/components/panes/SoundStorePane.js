import React, { useContext, useRef } from "react";

import CurrentTrackDisplay from "../displays/CurrentTrackDisplay";
import SoundStore from "../sounds/SoundStore";
import SoundContext from "../../context/sound/soundContext";
import "./SoundStorePane.css";

const SoundStorePane = () => {
  const soundContext = useContext(SoundContext);
  const {
    currentTrack,
    savedTracks,
    playSound,
    removeSound,
    saveTrack,
    clearTrack
  } = soundContext;

  const playInterval = useRef();

  const handlePlay = () => {
    let iteration = 0;

    playInterval.current = setInterval(() => {
      if (iteration >= currentTrack.length) {
        clearInterval(playInterval.current);
        playInterval.current = null;
        playSound(null);
        return;
      }

      playSound({
        id: currentTrack[iteration].id,
        name: currentTrack[iteration].name
      });

      currentTrack[iteration].audio.currentTime = 0;
      currentTrack[iteration].audio.play();

      iteration += 1;
    }, 500);
  };

  const handleStop = () => {
    clearInterval(playInterval.current);
    playInterval.current = null;
    playSound(null);
  };

  const handleRemove = () => {
    removeSound();
  };

  const handleClear = () => {
    clearTrack();
  };

  const handleSave = () => {
    if (savedTracks.length < 5 && currentTrack.length > 0) {
      saveTrack();
    }
  };

  return (
    <div className="sound-store-pane">
      <div className="current-track-area">
        {!playInterval.current ? (
          <button className="control-button play-button" onClick={handlePlay}>
            <i className="fas fa-play"></i>
          </button>
        ) : (
          <button className="control-button play-button" onClick={handleStop}>
            <i className="fas fa-stop"></i>
          </button>
        )}
        <CurrentTrackDisplay />
        <button className="control-button" onClick={handleRemove}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="control-button" onClick={handleClear}>
          <i className="fas fa-times"></i>
        </button>
        <button className="control-button" onClick={handleSave}>
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
      <SoundStore />
    </div>
  );
};

export default SoundStorePane;
