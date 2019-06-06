import {
  FILE_UPLOAD
} from '../constants/ActionTypes';
import moment from 'moment';

const initialState = {
  files: []
};

const state = (state = initialState, action) => {
  let allFiles;
  switch (action.type) {
    case FILE_UPLOAD:
      const d = action.data;
      allFiles = sessionStorage.getItem('files') ? JSON.parse(sessionStorage.getItem('files')) : [];
      if (d.status === 'FINALISED') {
        d.results.timestamp = moment(d.results.timestamp).format('Y-MM-DD');
      }
      allFiles.push(d);
      sessionStorage.setItem('files', JSON.stringify(allFiles));
      return {
        files: allFiles.filter(file => file.results)
      };
    default:
      allFiles = sessionStorage.getItem('files') ? JSON.parse(sessionStorage.getItem('files')) : [];
      return {
        files: allFiles.filter((file) => file.results)
      };
  }
};

export default state;