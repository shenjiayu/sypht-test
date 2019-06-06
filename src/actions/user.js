import user from '../api/user';
import * as types from '../constants/ActionTypes';
import moment from 'moment';

export const loginAction = data => ({
  type: types.USER_LOGGEDIN,
  data
});

export const loginFunc = () => {
  return dispatch => {
    user.login().then(({ data }) => {
      const expiresAt = moment().add(data.expires_in, 'seconds').unix();
      Object.assign(data, {
        expires_at: expiresAt
      });
      dispatch(loginAction(data));
    });
  };
};

export const logoutAction = () => ({
  type: types.USER_LOGGEDOUT
});

export const logoutFunc = () => {
  return logoutAction();
}