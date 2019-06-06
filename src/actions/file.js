import file from '../api/file';
import * as types from '../constants/ActionTypes';

export const uploadAction = (data) => ({
  type: types.FILE_UPLOAD,
  data
});

export const uploadFunc = (f, fieldSets) => {
  return (dispatch, getState) => {
    const user = getState().user;
    return file.upload(user, f, fieldSets).then(({ data }) => {
      file.getResults(user, data.fileId).then(({ data }) => {
        dispatch(uploadAction(data));
      });
    });
  };
};