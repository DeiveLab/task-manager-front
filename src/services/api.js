import axios from 'axios';

const api = axios.create({
    baseURL: "https://deive-task-manager.herokuapp.com"
});

export default api;