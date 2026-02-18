import axios from 'axios';

/**
 * Pour mon développement frontend, j'utilise mon adresse IP local 
 * pour avoir accès à la base de données. Sur le mobile, le localhost n'est pas 
 * bien compris comme sur le web. 
 * @access IP de votre environnement
 */
const API_URL = 'http://192.168.94.61:8080';

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;