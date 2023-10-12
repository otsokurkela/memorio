export default function checkLoggedIn() {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken !== null) {
    return true;
  } else return false;
}
