import React, { useReducer } from "react";
import uuidv1 from "uuid/v1";

import SoundContext from "./soundContext";
import soundReducer from "./soundReducer";
import {
  ADD_SOUND,
  PLAY_SOUND,
  CLEAR_DISPLAYS,
  REMOVE_SOUND,
  SAVE_TRACK,
  DELETE_TRACK,
  CLEAR_CURRENT_TRACK,
  SELECT_TRACK
} from "../types";

const SoundState = props => {
  const initialState = {
    currentSound: {},
    currentTrack: [],
    savedTracks: []
  };

  const [state, dispatch] = useReducer(soundReducer, initialState);

  // Add sound
  const addSound = ({ name, audio }) => {
    dispatch({
      type: ADD_SOUND,
      payload: { name: name, audio: audio, id: uuidv1() }
    });
  };

  // Play sound
  const playSound = sound => {
    dispatch({
      type: PLAY_SOUND,
      payload: sound
    });
  };

  // Remove sound
  const removeSound = () => {
    dispatch({
      type: REMOVE_SOUND
    });
  };

  // Clear displays
  const clearDisplays = () => {
    dispatch({
      type: CLEAR_DISPLAYS
    });
  };

  // Save track
  const saveTrack = () => {
    dispatch({
      type: SAVE_TRACK
    });
  };

  // Delete track
  const deleteTrack = id => {
    dispatch({
      type: DELETE_TRACK,
      payload: id
    });
  };

  // Clear currently played track
  const clearTrack = () => {
    dispatch({
      type: CLEAR_CURRENT_TRACK
    });
  };

  // Select track from the store
  const selectTrack = id => {
    dispatch({
      type: SELECT_TRACK,
      payload: id
    });
  };

  return (
    <SoundContext.Provider
      value={{
        currentSound: state.currentSound,
        currentTrack: state.currentTrack,
        savedTracks: state.savedTracks,
        addSound,
        playSound,
        removeSound,
        clearDisplays,
        saveTrack,
        deleteTrack,
        clearTrack,
        selectTrack
      }}
    >
      {props.children}
    </SoundContext.Provider>
  );
};

export default SoundState;
