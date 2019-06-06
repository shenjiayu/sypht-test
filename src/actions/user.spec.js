import * as actions from './user';
import * as types from '../constants/ActionTypes';

describe('User Action Creator', () => {
  it('should create an action to login', () => {
    const data = [];
    const expectedAction = {
      type: types.USER_LOGGEDIN,
      data
    };

    expect(actions.loginAction(data)).toEqual(expectedAction);
  });

  it('should create an action to logout', () => {
    const expectedAction = {
      type: types.USER_LOGGEDOUT
    };

    expect(actions.logoutAction()).toEqual(expectedAction);
  });
});