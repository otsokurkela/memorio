async function handleLogin(loginData) {
  const email = loginData.email;
  const password = loginData.password;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  }).then(async (response) => {
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('accessToken', data.tokens.accessToken);
      localStorage.setItem('refreshToken', data.tokens.refreshToken);
      localStorage.setItem('userId', data.userId);
      window.location.replace('http://localhost:3000/');
    }
  });
}

export default handleLogin;
