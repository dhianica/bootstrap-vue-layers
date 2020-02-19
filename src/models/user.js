export default class User {
  constructor (username, password, userNumber, userFullname, userNickname, userType, orgStructureId) {
    this.userNumber = userNumber
    this.userFullname = userFullname
    this.userNickname = userNickname
    this.userType = userType
    this.orgStructureId = orgStructureId
    this.username = username
    this.password = password
  }
}
