import { combineReducers } from 'redux';
import user, { clearReduxOnLogout } from './user';
import login from './login';
import notification from './notification';

const combinedReducers = combineReducers({
  login,
  user,
  notification,
});

const rootReducer = (state, action) => {
  let appState = state;
  // As one reducer can not update the key values for other reducer keys here we are handling
  // the logout before actual reducers get fired and setting the whole redux store to undefined.
  appState = clearReduxOnLogout(appState, action);
  return combinedReducers(appState, action);
};

export default rootReducer;
