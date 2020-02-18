export default function authHeader() {
  let user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken.token) {
    return { Authorization: 'Bearer ' + user.accessToken.token };
  } else {
    return {};
  }
}
