// ------------------------------------
// Imports
// ------------------------------------
import {
  LOGIN_USER_START, ERROR_USER_LOGIN,
  LOGIN_USER_END,
} from '../constants/login';

// ------------------------------------
// Reducer Handlers
// ------------------------------------
export const initialState = {
  isProcessing: false,
  isError: false,
  info: {},
};

const REDUCER_HANDLERS = {
  [LOGIN_USER_START]: () => ({ ...initialState, isProcessing: true }),
  [ERROR_USER_LOGIN]: () => ({ ...initialState, isError: true }),
  [LOGIN_USER_END]: (state, action) => ({ ...initialState, info: action.payload }),
};

// ------------------------------------
// Reducer
// ------------------------------------
export default function loginReducer(state = initialState, action) {
  const handler = REDUCER_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
