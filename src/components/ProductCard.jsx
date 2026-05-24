const ProductCard = ({ product }) => {

  // Function to display product added to cart
  const handleCart = () => {
    alert(`${product.name} added to Cart`);
  };

  return (

    // Displaying each products 
    <div className="product-card">

      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>&#x20B9; {product.price}</p>
      <p>{product.category}</p>
      <p>&#11088; {product.rating}</p>

      {/* Button for Add to cart with function */}
      <button onClick={handleCart}>
        Add to Cart
      </button>

    </div>
  );
};

export default ProductCard;