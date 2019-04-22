import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-gonzalez.herokuapp.com'
});

export default api;