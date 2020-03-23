import axios from 'axios'
import authHeader from './auth-header'
import url from '../config/url'

const API_URL = url() + 'api/map'

class MapService {
  getByCondition (query) {
    return axios.get(API_URL + query, { headers: authHeader() })
  }
}

export default new MapService()
