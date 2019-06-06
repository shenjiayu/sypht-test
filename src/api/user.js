import credentials from '../constants/Credentials';
import axios from './axios';

export default {
  login: () => {
    const data = {
      client_id: credentials.client_id,
      client_secret: credentials.client_secret,
      audience: 'https://api.sypht.com',
      grant_type: 'client_credentials'
    };
    return axios.post(
      'https://login.sypht.com/oauth/token',
      data,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
};