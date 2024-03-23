import React from "react";
import PropTypes from "prop-types";

import "./SoundStoreItem.css";

const SoundStoreItem = ({
  savedTrack: { id, track },
  handleSelectTrack,
  handleDeleteTrack
}) => {
  return (
    <div className="sound-store-item">
      <div
        className="sound-store-item-track"
        onClick={() => handleSelectTrack(id)}
      >
        {track.map(sound => (
          <span key={sound.id} className="sound-store-item-sound">
            {sound.name}
          </span>
        ))}
      </div>
      <button
        className="delete-store-item-button"
        onClick={() => handleDeleteTrack(id)}
      >
        <i className="fas fa-times"></i>
      </button>
    </div>
  );
};

SoundStoreItem.propTypes = {
  savedTrack: PropTypes.object.isRequired,
  handleSelectTrack: PropTypes.func.isRequired,
  handleDeleteTrack: PropTypes.func.isRequired
};

export default SoundStoreItem;
