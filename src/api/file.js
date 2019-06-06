import axios from './axios';

export default {
  upload: (user, file, fieldSets) => {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data',
      'Authorization': `${user.token_type} ${user.access_token}`
    };
    const data = new FormData();
    data.append('fieldSets', JSON.stringify([...fieldSets]));
    data.append('fileToUpload', file);
    return axios.post(
      'https://api.sypht.com/fileupload/',
      data,
      {
        headers
      }
    );
  },
  getResults: (user, fileId) => {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `${user.token_type} ${user.access_token}`
    };

    return axios.get(
      `https://api.sypht.com/result/final/${fileId}`,
      {
        headers
      }
    )
  }
};