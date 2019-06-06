import {
  USER_LOGGEDIN,
  USER_LOGGEDOUT
} from '../constants/ActionTypes';
import moment from 'moment';

const initialState = {
  access_token: '',
  scope: '',
  expires_in: 0,
  expires_at: 0,
  token_type: 'Bearer'
};

const state = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGEDIN:
      sessionStorage.setItem('credentials', JSON.stringify(action.data));
      return action.data;
    case USER_LOGGEDOUT:
      sessionStorage.clear();
      return initialState;
    default:
      const credentials = sessionStorage.getItem('credentials');
      if (!credentials) {
        return initialState;
      }
      return JSON.parse(credentials);
  }
};

export default state;

export const isLoggedIn = ({ user }) => {
  const now = moment().unix();
  if (typeof user !== 'object') {
    user = JSON.parse(user);
  }
  if (user.access_token !== '' && user.expires_at >= now) {
    return true;
  }
  return false;
};