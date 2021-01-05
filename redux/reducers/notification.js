import { PUSH_NOTIFICATION, REMOVE_NOTIFICATION } from '../constants/notification';

const initialState = {
  messages: {},
};

const REDUCER_HANDLERS = {
  [PUSH_NOTIFICATION]: (state, { payload = {} }) => {
    const updatedState = { messages: { ...state.messages, [payload.code]: payload } };
    return updatedState;
  },
  [REMOVE_NOTIFICATION]: (state, { payload }) => {
    const { messages } = state;
    delete messages[payload.key];
    return { messages: { ...messages } };
  },
};

// ------------------------------------
// Reducer
// ------------------------------------
export default function notifyReducer(state = initialState, action) {
  const handler = REDUCER_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
