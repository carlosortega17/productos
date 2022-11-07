import axios from 'axios';

const productService = axios.create({
  baseURL: 'https://fakestoreapi.com/products',
  responseType: 'json',
});

export default productService;