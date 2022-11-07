import axios from 'axios';

const loginService = axios.create({
  baseURL: 'https://fakestoreapi.com/auth/login',
  responseType: 'json',
});

export default loginService;