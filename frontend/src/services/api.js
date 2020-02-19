import axios from 'axios';

const api = axios.create({
    baseURL: 'http://devshark.herokuapp.com:3000/'
})

export default api;