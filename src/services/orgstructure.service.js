import axios from 'axios'
import authHeader from './auth-header'
import url from '../config/url'

const API_URL = url() + 'api/org_structures/'

class OrgStructure {
  getAll () {
    return axios.get(API_URL, { headers: authHeader() })
  }

  getById (id) {
    return axios.get(API_URL + id, { headers: authHeader() })
  }

  addOrgStucture (orgstructure) {
    return axios.post(API_URL, { headers: authHeader() }, {
      parent_id: orgstructure.parentId,
      org_structure_name: orgstructure.orgStructureName,
      org_structure_description: orgstructure.orgStructureDescription,
      map_id: orgstructure.mapId,
      res_1: orgstructure.res1,
      res_2: orgstructure.res2,
      res_3: orgstructure.res3,
      res_4: orgstructure.res4,
      res_5: orgstructure.res5,
    })
  }
  updateOrgStucture (id, orgstructure) {
    return axios.put(API_URL + id, { headers: authHeader() }, {
      parent_id: orgstructure.parentId,
      org_structure_name: orgstructure.orgStructureName,
      org_structure_description: orgstructure.orgStructureDescription,
      map_id: orgstructure.mapId,
      res_1: orgstructure.res1,
      res_2: orgstructure.res2,
      res_3: orgstructure.res3,
      res_4: orgstructure.res4,
      res_5: orgstructure.res5,
    })
  }
  deleteOrgStucture (id) {
    return axios.delete(API_URL + id, { headers: authHeader() })
  }
}

export default new OrgStructure()
