import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/users/';

class UserService {
  getAll() {
    return axios.get(API_URL);
  }

  getById(id) {
    return axios.get(API_URL + id, { headers: authHeader() });
  }
}

export default new UserService();
