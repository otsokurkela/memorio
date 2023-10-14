export default async function refreshLogin() {
  const response = await fetch('http://localhost:5000/api/auth/refresh_token', {
    headers: {
      method: 'GET',
      'Content-Type': 'application/json',
      mode: 'cors',
      credentials: 'include',
      authorization: 'Bearer ' + localStorage.getItem('accessToken')
    }
  });
  const tokens = await response.json();
  console.log(tokens);
}
