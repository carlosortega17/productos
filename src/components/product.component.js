export default function Product({ product }) {
  return (
    <div className="card mb-4 col-6 p-0">
      <div className="card-header">
        <h5>{product.title} - ${product.price}</h5>
      </div>
      <div className="card-body">
        <p>{product.description}</p>
        <img width="200" height="200" src={product.image} alt={product.title} />
      </div>
      <div className="card-footer">
        <span className="text-muted">{product.category}</span>
      </div>
    </div>
  );
}