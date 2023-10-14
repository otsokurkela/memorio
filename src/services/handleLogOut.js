export default async function handleLogOut() {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  const response = await fetch('http://localhost:5000/api/auth/refresh_token', {
    method: 'DELETE'
  });
  window.location.replace('http://localhost:3000/');
}
