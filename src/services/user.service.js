import axios from 'axios'
import authHeader from './auth-header'
import url from '../config/url'

const API_URL = url() + 'api/users'

class UserService {
  getAll () {
    return axios.get(API_URL, { headers: authHeader() })
  }

  getById (id) {
    return axios.get(API_URL + '/' + id, { headers: authHeader() })
  }

  getByCondition (query) {
    return axios.get(API_URL + query, { headers: authHeader() })
  }

  add (user) {
    return axios({
      method: 'post',
      url: API_URL,
      headers: authHeader(),
      data: {
        user_number: user.user_number,
        user_fullname: user.user_fullname,
        user_nickname: user.user_nickname,
        user_type: user.user_type,
        org_structure_id: user.org_structure_id,
        username: user.username,
        password: user.password,
      },
    })
  }
  update (id, user) {
    return axios({
      method: 'put',
      url: API_URL + '/' + id,
      headers: authHeader(),
      data: {
        user_number: user.user_number,
        user_fullname: user.user_fullname,
        user_nickname: user.user_nickname,
        user_type: user.user_type,
        // org_structure_id: user.org_structure_id,
        username: user.username,
        password: user.password,
      },
    })
  }
  delete (id) {
    return axios.delete(API_URL + '/' + id, { headers: authHeader() })
  }
}

export default new UserService()
