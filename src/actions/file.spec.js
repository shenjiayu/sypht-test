import * as actions from './file';
import * as types from '../constants/ActionTypes';

describe('File Action Creator', () => {
  it('should create an action to upload documents', () => {
    const data = [];
    const expectedAction = {
      type: types.FILE_UPLOAD,
      data
    };

    expect(actions.uploadAction(data)).toEqual(expectedAction);
  });
});