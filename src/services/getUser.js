async function getUser() {
  console.log(localStorage.getItem('accessToken'));
  const response = await fetch('http://localhost:5000/api/users', {
    method: 'GET',
    body: {
      userId: localStorage.getItem('userId')
    },
    headers: {
      'Content-Type': 'application/json',
      authorization: 'Bearer ' + localStorage.getItem('accessToken')
    }
  }).then(async (response) => {
    console.log(response);
  });
}

export default getUser;
