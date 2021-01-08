import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

/* import constants */
import apiMethods from './apiMethod';

// to read data from firebase
const getData = (ref) => new Promise((resolve, reject) => {
  const onError = (error) => reject(error);
  const onData = (snap) => resolve(snap.val());

  ref.on('value', onData, onError);
});
const updates = [];

export default function request({
  method = 'get',
  url,
  endpoint,
  payload,
  query,
  // token,
  // type = 'application/json',
}) {
  const _url = url || endpoint;

  const database = firebase.database();
  let apiRequest = null;
  console.log('===', payload);
  // declaring method
  switch (method) {
    case apiMethods.GET:
      // converting callback into promise
      apiRequest = getData(database.ref(_url));
      break;
    case apiMethods.POST:
      apiRequest = database.ref(_url).push().set(payload);
      break;
    case apiMethods.PUSH:
      apiRequest = database.ref(_url).update(updates[query] = payload);
      break;
    case apiMethods.DELETE:
      apiRequest = database.ref(_url).push().set({ isDeleted: true });
      break;
    case apiMethods.AUTH:
      apiRequest = firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password);
      break;
    default:
      break;
  }
  return apiRequest;
}
