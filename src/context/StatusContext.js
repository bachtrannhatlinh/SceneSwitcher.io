import { createContext, useReducer, useContext } from "react";

const StatusContext = createContext();

// Define action types as constants to avoid typos
const actionTypes = {
  UPLOAD: 'upload',
  UPLOAD_NEW_SCENE: 'upload_new_scene',
  PREVIEW_VIDEO: 'preview_video',
  VOICE_OVER_CHANGE: 'voice_over_change',
  BACKGROUND_MUSIC_CHANGE: 'background_music_change',
  DOWNLOAD_VIDEO: 'download_video',
};

function stateReducer(state, action) {
  switch (action.status.status) {
    case actionTypes.UPLOAD:
      return { status: actionTypes.UPLOAD };
    case actionTypes.UPLOAD_NEW_SCENE:
      return { status: actionTypes.UPLOAD_NEW_SCENE };
    case actionTypes.PREVIEW_VIDEO:
      return { status: actionTypes.PREVIEW_VIDEO };
    case actionTypes.VOICE_OVER_CHANGE:
      return { status: actionTypes.VOICE_OVER_CHANGE };
    case actionTypes.BACKGROUND_MUSIC_CHANGE:
      return { status: actionTypes.BACKGROUND_MUSIC_CHANGE };
    case actionTypes.DOWNLOAD_VIDEO:
      return { status: actionTypes.DOWNLOAD_VIDEO };
    default:
      return state;
  }
}

export const StatusContextProvider = ({ children }) => {
  const initialState = { status: actionTypes.UPLOAD };
  const [stateStatus, dispatchStatus] = useReducer(stateReducer, initialState);

  const updateStatus = (status) => {
    dispatchStatus({ status });
  };

  return (
    <StatusContext.Provider value={{ stateStatus, updateStatus }}>
      {children}
    </StatusContext.Provider>
  );
};

export const useStatusContext = () => {
  const { stateStatus, updateStatus } = useContext(StatusContext);
  return { stateStatus, updateStatus };
};
