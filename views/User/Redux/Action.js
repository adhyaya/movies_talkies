import { fetchUser as fetchUserApi, logoutUser as logoutUserApi } from '../../../apis/user';

import {
  FETCH_USER_START, ERROR_USER,
  FETCH_USER_END, LOGOUT_USER,
} from './ActionType';

export function fetchUserStart() {
  return ({ type: FETCH_USER_START });
}

export function fetchUserEnd(payload) {
  return ({ type: FETCH_USER_END, payload });
}

export function raiseErrorFetchUser() {
  return ({ type: ERROR_USER });
}

export function logoutUser() {
  return (dispatch) => {
    logoutUserApi()
      .then(() => { })
      .catch(() => { });
    dispatch({ type: LOGOUT_USER });
  };
}
/*
 * @export function handleFetchUser action handler
 * loads the user from api
 */
export function getAuthUser() {
  return (dispatch) => {
    dispatch(fetchUserStart());
    fetchUserApi()
      .then((res) => {
        dispatch(fetchUserEnd(res.body));
      })
      .catch(() => {
        dispatch(raiseErrorFetchUser());
      });
  };
}
