import axios from 'axios';
import store from '../store';
import * as types from '../constants/ActionTypes';

const instance = axios.create();

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  if (error.response.status === 401) {
    store.dispatch({
      type: types.USER_LOGGEDOUT
    });
  }
  // Do something with response error
  return Promise.reject(error);
});

export default instance;