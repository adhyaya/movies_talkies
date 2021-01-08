/* import actiontypes */
import * as ActionTypes from './ActionTypes';

const API_STATE = {
  isProcessing: false,
  isSuccess: false,
};
export const initialState = {
  loginApiState: {
    ...API_STATE,
    info: {},
  },
};

/* reducer */
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOGIN_USER_LOADING:
      return {
        ...state,
        loginApiState: {
          ...state.loginApiState,
          isProcessing: true,
        },
      };

    case ActionTypes.LOGIN_USER_FAILED:
      return {
        ...state,
        loginApiState: {
          ...state.loginApiState,
          isProcessing: false,
        },
      };

    case ActionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loginApiState: {
          ...state.loginApiState,
          isProcessing: false,
          isSuccess: true,
          info: action.payload,
        },
      };

    case ActionTypes.CLEAR_LOGIN_API_STATE:
      return {
        ...state,
        loginApiState: {
          ...state.loginApiState,
          isProcessing: false,
          isSuccess: false,
        },
      };

    default:
      return { ...state };
  }
}
