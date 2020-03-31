import axios from 'axios';

const api = axios.create({
    // baseURL: 'http://192.168.0.4:3333',
    baseURL: 'https://bethehero-backend-macario.herokuapp.com',
});

export default api;