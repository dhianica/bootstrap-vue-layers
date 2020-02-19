import axios from 'axios'
import authHeader from './auth-header'
import url from '../config/url'

const API_URL = url() + 'api/pois/'

class Poi {
  getAll () {
    return axios.get(API_URL, { headers: authHeader() })
  }

  getById (id) {
    return axios.get(API_URL + id, { headers: authHeader() })
  }

  addPoi (poi) {
    return axios.post(API_URL, { headers: authHeader() }, {
      poi_name: poi.poiName,
      poi_address: poi.poiAddress,
      poi_lon: poi.poiLon,
      poi_lat: poi.poiLat,
      poi_type: poi.poiType,
      poi_description: poi.poiDescription,
    })
  }
  updatePoi (id, poi) {
    return axios.put(API_URL + id, { headers: authHeader() }, {
      poi_name: poi.poiName,
      poi_address: poi.poiAddress,
      poi_lon: poi.poiLon,
      poi_lat: poi.poiLat,
      poi_type: poi.poiType,
      poi_description: poi.poiDescription,
    })
  }
  deletePoi (id) {
    return axios.delete(API_URL + id, { headers: authHeader() })
  }
}

export default new Poi()
