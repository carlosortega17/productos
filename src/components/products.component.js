import useProducts from '../hooks/useProducts';
import Product from './product.component';

export default function Products() {
  const {
    products,
  } = useProducts();
  return (
    <div className="container">
      <div className="row justify-content-center">
        {products.length > 0 ? (
          products.map((product) => (
            <Product product={product} key={product.id} />
          ))
        ) : (<div>Cargando informacion</div>)}
      </div>
    </div>
  );
}
