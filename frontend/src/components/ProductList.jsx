import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/products/all')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {products.map(product => (
            <li
              key={product.id}
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                margin: '10px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '15px'
              }}
            >
              {/* Image */}
              {product.imageUrl && (
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '8px' }}
                />
              )}

              {/* Details */}
              <div>
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <p>₹{product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;