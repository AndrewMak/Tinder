import axios from 'axios';

const api = axios.create({
    baseURL: 'http://devshark.herokuapp.com:3333'
})

export default api;