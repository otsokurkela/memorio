export default function refreshLogin() {
  localStorage.setItem('accessToken', localStorage.getItem('refreshToken'));
}
