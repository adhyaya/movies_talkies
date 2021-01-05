import apiCall from './apiRequest';
import endPoints from './endpoints';

export function loginUser({ payload }) {
  return apiCall({
    endpoint: endPoints.getUsers,
    payload,
    method: 'put',
  });
}

export default {
  loginUser,
};
