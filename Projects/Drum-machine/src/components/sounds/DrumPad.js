import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";

import "./DrumPad.css";

const DrumPad = ({ drumPad, handlePlay }) => {
  const [active, setActive] = useState(false);
  const drumSound = useRef();

  useEffect(() => {
    document.addEventListener("keypress", handleKeyPress);
    return () => {
      document.removeEventListener("keypress", handleKeyPress);
    };
  });

  const handleClick = () => {
    handlePlay({ audio: drumSound.current, name: drumPad.name });
  };

  const handleKeyPress = e => {
    if (e.key.toUpperCase() === drumPad.name.toUpperCase()) {
      setActive(true);
      setTimeout(() => setActive(false), 200);
      handlePlay({ audio: drumSound.current, name: drumPad.name });
    }
  };

  return (
    <div
      className={active ? "drum-pad drum-pad-active" : "drum-pad"}
      id={drumPad.name}
      onClick={handleClick}
    >
      {drumPad.name}
      <audio
        ref={drumSound}
        className="clip"
        id={drumPad.name}
        src={drumPad.src}
      ></audio>
    </div>
  );
};

DrumPad.propTypes = {
  drumPad: PropTypes.object.isRequired,
  handlePlay: PropTypes.func.isRequired
};

export default DrumPad;
