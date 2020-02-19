import axios from 'axios'
import url from '../config/url'

const API_URL = url() + 'api/'

class AuthService {
  login (user) {
    return axios
      .post(API_URL + 'users/login', {
        username: user.username,
        password: user.password,
      })
      .then(response => {
        if (response.data.accessToken.token) {
          localStorage.setItem('user', JSON.stringify(response.data))
        }

        return response.data
      })
  }
  logout () {
    localStorage.removeItem('user')
  }
}

export default new AuthService()
