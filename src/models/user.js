export default class User {
  constructor (username, password, usernumber, userfullname, usernickname, usertype, orgstructureid, passwordsalt) {
    this.usernumber = usernumber
    this.userfullname = userfullname
    this.usernickname = usernickname
    this.usertype = usertype
    this.orgstructureid = orgstructureid
    this.username = username
    this.password = password
    this.passwordsalt = passwordsalt
  }
}
