import { combineReducers } from 'redux';
import user from './user';
import file from './file';

export default combineReducers({
  user,
  file
});