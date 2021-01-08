import * as actionTypes from './ActionType';

const initialState = {
  messages: {},
  isProcessing: false,
};

// ------------------------------------
// Reducer
// ------------------------------------
export default function notifyReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.PUSH_NOTIFICATION:
      return {
        ...state,
        messages: {
          ...state.messages,
          [action.payload.status]: action.payload,
        },
      };

    case actionTypes.REMOVE_NOTIFICATION:
      return {
        ...initialState,
        messages: {},
      };

    default:
      return {
        ...initialState,
      };
  }
}
