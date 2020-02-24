import axios from 'axios'
import authHeader from './auth-header'
import url from '../config/url'

const API_URL = url() + 'api/configs'

class ConfigService {
  getAll () {
    return axios.get(API_URL, { headers: authHeader() })
  }

  getById (id) {
    return axios.get(API_URL + '/' + id, { headers: authHeader() })
  }

  getByCondition (query) {
    return axios.get(API_URL + query, { headers: authHeader() })
  }

  add (config) {
    return axios({
      method: 'post',
      url: API_URL,
      headers: authHeader(),
      data: {
        config_name: config.config_name,
        config_type: config.config_type,
        config_description: config.config_description,
        res_1: config.res_1,
        res_2: config.res_2,
        res_3: config.res_3,
        res_4: config.res_4,
        res_5: config.res_5,
      },
    })
  }
  update (id, config) {
    return axios({
      method: 'put',
      url: API_URL + '/' + id,
      headers: authHeader(),
      data: {
        config_name: config.config_name,
        config_type: config.config_type,
        config_description: config.config_description,
        res_1: config.res_1,
        res_2: config.res_2,
        res_3: config.res_3,
        res_4: config.res_4,
        res_5: config.res_5,
      },
    })
  }
  delete (id) {
    return axios.delete(API_URL + '/' + id, { headers: authHeader() })
  }
}

export default new ConfigService()
