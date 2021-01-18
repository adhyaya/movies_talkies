import loginUserService from '../Service';
import ActionDispatcher from '../../../apis/ActionDispatcher';

import * as ActionTypes from './ActionTypes';

/**
 * used to clear the Api state of the login service call
 */
export function clearLoginApiState() {
  return (dispatch) => {
    dispatch({
      type: ActionTypes.CLEAR_LOGIN_API_STATE,
    });
  };
}

/**
 * @param {object} payload
 * this action is used to hit the login API
 */
export function loginUserAction(payload) {
  console.log('====');
  return ActionDispatcher(loginUserService.bind(null, payload),
    ActionTypes.LOGIN_USER_SUCCESS,
    ActionTypes.LOGIN_USER_FAILED,
    ActionTypes.LOGIN_USER_LOADING, null, {
      loader: true,
    });
}
