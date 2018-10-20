import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api';
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Content-Type'] = 'application/json';
