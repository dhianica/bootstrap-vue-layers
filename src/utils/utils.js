class Utils {
  createTreeJsonObject = listData => {
    return listData.reduce((map, node) => {
      map.i[node.id] = node
      node.children = []
      node.parent_id === 0 ? map.result.push(node) : map.i[node.parent_id].children.push(node)
      return map
    }, { i: {}, result: [] }).result
  }
}

export default new Utils()
