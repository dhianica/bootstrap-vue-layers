import axios from 'axios'
import authHeader from './auth-header'
import url from '../config/url'

const API_URL = url() + 'api/org_structures'

class OrgStructure {
  getAll () {
    return axios.get(API_URL, { headers: authHeader() })
  }

  getById (id) {
    return axios.get(API_URL + '/' + id, { headers: authHeader() })
  }

  getByCondition (query) {
    return axios.get(API_URL + query, { headers: authHeader() })
  }

  add (orgstructure) {
    return axios({
      method: 'post',
      url: API_URL,
      headers: authHeader(),
      data: {
        parent_id: orgstructure.parent_id,
        org_structure_name: orgstructure.org_structure_name,
        org_structure_description: orgstructure.org_structure_description,
        map_id: orgstructure.map_id,
        res_1: orgstructure.res_1,
        res_2: orgstructure.res_2,
        res_3: orgstructure.res_3,
        res_4: orgstructure.res_4,
        res_5: orgstructure.res_5,
      },
    })
  }

  update (id, orgstructure) {
    return axios({
      method: 'put',
      url: API_URL + '/' + id,
      headers: authHeader(),
      data: {
        parent_id: orgstructure.parent_id,
        org_structure_name: orgstructure.org_structure_name,
        org_structure_description: orgstructure.org_structure_description,
        map_id: orgstructure.map_id,
        res_1: orgstructure.res_1,
        res_2: orgstructure.res_2,
        res_3: orgstructure.res_3,
        res_4: orgstructure.res_4,
        res_5: orgstructure.res_5,
      },
    })
  }

  delete (id) {
    return axios.delete(API_URL + '/' + id, { headers: authHeader() })
  }
}

export default new OrgStructure()
