import variables from '../components/utils/variables';

export default async function handleLogOut() {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  await fetch(variables('api_url').concat('/auth/refresh_token'), {
    method: 'DELETE'
  });
  window.location.replace(variables('url'));
}
