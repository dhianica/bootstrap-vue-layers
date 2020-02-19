import axios from 'axios'
import authHeader from './auth-header'
import url from '../config/url'

const API_URL = url() + 'api/users/'

class UserService {
  getAll () {
    return axios.get(API_URL, { headers: authHeader() })
  }

  getById (id) {
    return axios.get(API_URL + id, { headers: authHeader() })
  }

  addUser (user) {
    return axios.post(API_URL, { headers: authHeader() }, {
      user_number: user.userNumber,
      user_fullname: user.userFullname,
      user_nickname: user.userNickname,
      user_type: user.userType,
      org_structure_id: user.orgStructureId,
      username: user.username,
      password: user.password,
    })
  }
  updateUser (id, user) {
    return axios.put(API_URL + id, { headers: authHeader() }, {
      user_number: user.userNumber,
      user_fullname: user.userFullname,
      user_nickname: user.userNickname,
      user_type: user.userType,
      org_structure_id: user.orgStructureId,
      username: user.username,
      password: user.password,
    })
  }
  deleteUser (id) {
    return axios.delete(API_URL + id, { headers: authHeader() })
  }
}

export default new UserService()
