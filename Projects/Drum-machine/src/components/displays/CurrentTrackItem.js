import React from "react";
import PropTypes from "prop-types";

import "./CurrentTrackItem.css";

const CurrentTrackItem = ({ name, isPlayed }) => {
  return (
    <div className={`played-sound ${isPlayed ? "played-sound-played" : ""}`}>
      {name}
    </div>
  );
};

CurrentTrackItem.propTypes = {
  name: PropTypes.string.isRequired,
  isPlayed: PropTypes.bool.isRequired
};

export default CurrentTrackItem;
