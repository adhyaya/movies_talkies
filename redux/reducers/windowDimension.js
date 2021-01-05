// ------------------------------------
// Imports
// ------------------------------------
import { SET_WINDOW_DIMENSION } from '../actions/windowDimension';
// import { getWindowDimension } from 'libs/windowDimension';

// ------------------------------------
// Reducer Handlers
// ------------------------------------
const REDUCER_HANDLER = {
  [SET_WINDOW_DIMENSION]: (state, action) => {
    const { payload } = action;
    return ({ innerWidth: payload.innerWidth, innerHeight: payload.innerHeight });
  },
};


// ------------------------------------
// Reducer
// ------------------------------------
export default function windowDimension(state = {}, action) {
  const handler = REDUCER_HANDLER[action.type];
  return handler ? handler(state, action) : state;
}
