class Utils {
  createTreeJsonObject = listData => {
    return listData.reduce((map, node) => {
      map.i[node.id] = node
      node.children = []
      node.parent_id === 0 ? map.result.push(node) : map.i[node.parent_id].children.push(node)
      return map
    }, { i: {}, result: [] }).result
  }

  mergeDataObject = (obj1, obj2) => {
    var result = obj1.map(obj => {
      let r = obj2.find(item => item.provinsi === obj.properties.name)
      return Object.assign({}, { ...obj }, { properties: { ...obj.properties, ...r } })
    })
    return result
  }
}

export default new Utils()
