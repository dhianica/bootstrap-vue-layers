import axios from 'axios'

const API_URL = 'http://localhost:8080/api/'

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
