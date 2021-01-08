import { PUSH_NOTIFICATION, REMOVE_NOTIFICATION } from '../constants/notification';

export function pushNotification(payload) {
  return ({
    type: PUSH_NOTIFICATION,
    payload,
  });
}

export function notify(payload) {
  return (dispatch) => {
    dispatch(pushNotification(payload));
  };
}

export function closeNotification(key) {
  return {
    type: REMOVE_NOTIFICATION,
    payload: { key },
  };
}
