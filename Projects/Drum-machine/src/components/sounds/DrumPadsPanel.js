import React, { useContext } from "react";

import DrumPad from "./DrumPad";
import SoundContext from "../../context/sound/soundContext";
import "./DrumPadsPanel.css";

const DrumPadsPanel = () => {
  const soundContext = useContext(SoundContext);
  const { currentTrack, addSound, clearDisplays } = soundContext;

  const drumPads = [
    {
      name: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
    },
    {
      name: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
    },
    {
      name: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
    },
    {
      name: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
    },
    {
      name: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
    },
    {
      name: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
    },
    {
      name: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
    },
    {
      name: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
    },
    {
      name: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
    }
  ];

  const handlePlay = drumData => {
    const { audio, name } = drumData;

    audio.currentTime = 0;
    audio.play();

    if (currentTrack.length > 9) {
      clearDisplays();
    } else {
      addSound({
        name: name,
        audio: audio
      });
    }
  };

  return (
    <div id="drum-pads-panel">
      {drumPads.map(drumPad => (
        <DrumPad key={drumPad.name} drumPad={drumPad} handlePlay={handlePlay} />
      ))}
    </div>
  );
};

export default DrumPadsPanel;
