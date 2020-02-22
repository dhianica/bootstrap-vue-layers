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
        config_name: config.configName,
        config_type: config.configType,
        config_description: config.configDescription,
        res_1: config.res1,
        res_2: config.res2,
        res_3: config.res3,
        res_4: config.res4,
        res_5: config.res5,
      },
    })
  }
  update (id, config) {
    return axios({
      method: 'put',
      url: API_URL + '/' + id,
      headers: authHeader(),
      data: {
        config_name: config.configName,
        config_type: config.configType,
        config_description: config.configDescription,
        res_1: config.res1,
        res_2: config.res2,
        res_3: config.res3,
        res_4: config.res4,
        res_5: config.res5,
      },
    })
  }
  delete (id) {
    return axios.delete(API_URL + '/' + id, { headers: authHeader() })
  }
}

export default new ConfigService()
