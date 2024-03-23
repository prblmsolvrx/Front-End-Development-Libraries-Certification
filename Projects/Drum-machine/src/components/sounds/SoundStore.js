import React, { useContext } from "react";

import SoundStoreItem from "./SoundStoreItem";
import SoundContext from "../../context/sound/soundContext";
import "./SoundStore.css";

const SoundStore = () => {
  const soundContext = useContext(SoundContext);
  const { savedTracks, deleteTrack, selectTrack } = soundContext;

  const handleSelectTrack = id => {
    selectTrack(id);
  };

  const handleDeleteTrack = id => {
    deleteTrack(id);
  };

  return (
    <div className="sound-store">
      {savedTracks.length > 0 &&
        savedTracks.map(savedTrack => (
          <SoundStoreItem
            key={savedTrack.id}
            savedTrack={savedTrack}
            handleSelectTrack={handleSelectTrack}
            handleDeleteTrack={handleDeleteTrack}
          />
        ))}
    </div>
  );
};

export default SoundStore;
