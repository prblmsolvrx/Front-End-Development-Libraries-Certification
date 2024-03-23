import uuidv1 from "uuid/v1";

import {
  ADD_SOUND,
  PLAY_SOUND,
  REMOVE_SOUND,
  CLEAR_DISPLAYS,
  SAVE_TRACK,
  DELETE_TRACK,
  CLEAR_CURRENT_TRACK,
  SELECT_TRACK
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_SOUND:
      return {
        ...state,
        currentSound: { id: action.payload.id, name: action.payload.name },
        currentTrack: [...state.currentTrack, action.payload]
      };
    case PLAY_SOUND:
      return {
        ...state,
        currentSound: action.payload
      };
    case REMOVE_SOUND:
      return {
        ...state,
        currentTrack: [...state.currentTrack.slice(0, -1)]
      };
    case CLEAR_DISPLAYS:
      return {
        ...state,
        currentSound: {}
      };
    case SAVE_TRACK:
      return {
        ...state,
        currentSound: {},
        currentTrack: [],
        savedTracks: [
          { id: uuidv1(), track: state.currentTrack },
          ...state.savedTracks
        ]
      };
    case DELETE_TRACK:
      return {
        ...state,
        savedTracks: state.savedTracks.filter(
          track => track.id !== action.payload
        )
      };
    case CLEAR_CURRENT_TRACK:
      return {
        ...state,
        currentSound: {},
        currentTrack: []
      };
    case SELECT_TRACK:
      return {
        ...state,
        currentTrack: state.savedTracks.filter(
          track => track.id === action.payload
        )[0].track
      };
    default:
      return state;
  }
};
