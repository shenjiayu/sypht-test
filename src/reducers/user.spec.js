import reducer from './user';
import * as types from '../constants/ActionTypes';

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      access_token: '',
      scope: '',
      expires_in: 0,
      expires_at: 0,
      token_type: 'Bearer'
    });
  });

  it('should handle USER_LOGGEDIN', () => {
    expect(reducer(undefined, {
      type: types.USER_LOGGEDIN,
      data: {
        access_token: '123',
        scope: 'all',
        expires_in: 86400,
        expires_at: 1559785380,
        token_type: 'Bearer'
      }
    })).toEqual({
      access_token: '123',
      scope: 'all',
      expires_in: 86400,
      expires_at: 1559785380,
      token_type: 'Bearer'
    })
  });

  it('should handle USER_LOGGEDOUT', () => {
    expect(reducer(undefined, {
      type: types.USER_LOGGEDOUT
    })).toEqual({
      access_token: '',
      scope: '',
      expires_in: 0,
      expires_at: 0,
      token_type: 'Bearer'
    });
  });
});