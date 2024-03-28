export default function accessTokenDated() {
  const tokensSetTime = new Date(localStorage.getItem('tokensSetTime'));
  if (tokensSetTime != null) {
    const now = new Date();
    const dateDifferenceInMinutes = (now - tokensSetTime) / 1000 / 60;
    if (dateDifferenceInMinutes < 30) {
      return false;
    } else {
      return true;
    }
  } else {
    console.error({ message: 'Access token not set' });
  }
}
