/* import action-types */
import * as actionTypes from './ActionType';


export function notify(payload) {
  return {
    type: actionTypes.PUSH_NOTIFICATION,
    payload,
  };
}

export function closeNotification(key) {
  return {
    type: actionTypes.REMOVE_NOTIFICATION,
    payload: { key },
  };
}
