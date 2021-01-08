import apiCall from '../../apis/apiRequest';

/* import api Constants */
import requestMethods from '../../apis/apiMethod';

export default function loginUserService(payload) {
  return apiCall({
    payload,
    method: requestMethods.AUTH,
  });
}
