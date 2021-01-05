// ------------------------------------
// Imports
// ------------------------------------
import {
  FETCH_USER_START, ERROR_USER,
  FETCH_USER_END, LOGOUT_USER,
} from '../constants/user';

// ------------------------------------
// Reducer Handlers
// ------------------------------------
export const initialState = {
  isFetching: false,
  isError: false,
  info: null,
};

const REDUCER_HANDLERS = {
  [FETCH_USER_START]: () => ({ ...initialState, isFetching: true }),
  [ERROR_USER]: () => ({ ...initialState, isError: true }),
  [FETCH_USER_END]: (state, action) => ({ ...initialState, info: action.payload }),
};

export function clearReduxOnLogout(state, action) {
  let appState = state;
  if (action.type === LOGOUT_USER) {
    appState = undefined;
  }
  return appState;
}

// ------------------------------------
// Reducer
// ------------------------------------
export default function authReducer(state = initialState, action) {
  const handler = REDUCER_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
