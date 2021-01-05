// import Router from 'next/router';
import { loginUser as loginUserApi } from '../../apis/login';
// import { notify } from './notification';

import {
  LOGIN_USER_START, ERROR_USER_LOGIN,
  LOGIN_USER_END,
} from '../constants/login';

export function loginUserStart() {
  return ({ type: LOGIN_USER_START });
}

export function loginUserEnd(payload = {}) {
  return ({ type: LOGIN_USER_END, payload });
}

export function raiseErrorLoginUser() {
  return ({ type: ERROR_USER_LOGIN });
}

export function loginUser(payload = {}) {
  return (dispatch) => {
    dispatch(loginUserStart());
    loginUserApi({ payload })
      .then((res = {}) => {
        dispatch(loginUserEnd(res.body.data));
      })
      .catch((error = {}) => {
        console.log('--->', error);
        dispatch(raiseErrorLoginUser());
      });
  };
}
