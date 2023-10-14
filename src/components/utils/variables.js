export default function variables(variable) {
  switch (variable) {
    default:
      return '';
    case 'api_url':
      return 'http://localhost:5000/api';
    case 'url':
      return 'http://localhost:3000';
  }
}
