async function getUser() {
  let user = {};
  const response = await fetch('http://localhost:5000/api/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + localStorage.getItem('accessToken')
    }
  }).then(async (response) => {
    user = await response.json();
  });
  console.log(user);
  return user;
}

export default getUser;
