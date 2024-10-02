import { createContext, useReducer, useContext } from "react";

const StatusContext = createContext();

function stateReducer(state, action) {
  switch (action.status) {
    case 'upload':
      return {status: 'upload'}
    case 'scene_change':
      return {status: 'scene_change'}
    case 'voice_over_change':
      return {status: 'voice_over_change'}
    case 'background_music_change':
      return {status: 'background_music_change'}
    case 'download':
      return {status: 'download'}
    default:
      return state;
  }
}

export const StatusContextProvider = ({ children }) => {
  const initialState = { status: 'upload' };
  const [stateStatus, dispatchStatus] = useReducer(stateReducer, initialState);

  return (
    <StatusContext.Provider
      value={{ stateStatus, updateStatus: dispatchStatus }}
    >
      {children}
    </StatusContext.Provider>
  );
};

export const useStatusContext = () => {
  const { stateStatus, updateStatus } = useContext(StatusContext);
  return { stateStatus, updateStatus };
};
