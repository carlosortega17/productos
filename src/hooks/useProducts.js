import { useEffect, useState } from 'react';
import productService from '../service/product.service';

const useProducts = () => {
  const [products, setProducts] = useState([]);

  const getData = () => {
    productService.get('').then((res) => {
      setProducts(res.data);
    });
  };
  
  const insertProduct = (form) => {
    productService.post('', form).then(() => {
      getData();
    });
  };

  useEffect(() =>{
    getData();
  }, []);

  return {
    products,
    insertProduct,
  };
};

export default useProducts;