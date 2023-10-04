async function handleLogin(loginData) {
  const email = loginData.email;
  const password = loginData.password;

  const response = await fetch('http://localhost:5000/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  }).then(async (response) => {
    if (response.ok) {
      console.log(await response.json());
    }
  });
}

export default handleLogin;
