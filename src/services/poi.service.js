import axios from 'axios'
import authHeader from './auth-header'
import url from '../config/url'

const API_URL = url() + 'api/pois'

class Poi {
  getAll () {
    return axios.get(API_URL, { headers: authHeader() })
  }

  getById (id) {
    return axios.get(API_URL + '/' + id, { headers: authHeader() })
  }

  getByCondition (query) {
    return axios.get(API_URL + query, { headers: authHeader() })
  }

  add (poi) {
    return axios({
      method: 'post',
      url: API_URL,
      headers: authHeader(),
      data: {
        poi_name: poi.poiName,
        poi_address: poi.poiAddress,
        poi_lon: poi.poiLon,
        poi_lat: poi.poiLat,
        poi_type: poi.poiType,
        poi_description: poi.poiDescription,
      },
    })
  }
  update (id, poi) {
    return axios({
      method: 'put',
      url: API_URL + '/' + id,
      headers: authHeader(),
      data: {
        poi_name: poi.poiName,
        poi_address: poi.poiAddress,
        poi_lon: poi.poiLon,
        poi_lat: poi.poiLat,
        poi_type: poi.poiType,
        poi_description: poi.poiDescription,
      },
    })
  }
  delete (id) {
    return axios.delete(API_URL + '/' + id, { headers: authHeader() })
  }
}

export default new Poi()
