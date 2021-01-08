// import apiCall from './apiRequest';
// import endPoints from './endpoints';

export function fetchUser() {
  // return apiCall({
  //   endpoint: endPoints.me
  // });
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        body: {
          name: 'Admin',
        },
      });
    });
  });
}

export function logoutUser() {
  // return apiCall({
  //   endpoint: '/',
  // });
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        body: {},
      });
    }, 1000);
  });
}

export default {
  fetchUser,
  logoutUser,
};
