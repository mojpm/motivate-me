import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./services/useFetch";
import Spinner from "./Spinner";
import PageNotFound from "./PageNotFound";

// TODO => Product Details returning 'Page Not Found' because request is being made to port 3000 instead of 3001. Cross-Env Not working for some reason. Fix It!

export default function Detail({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [sku, setSku] = useState("");

  const { data: product, loading, error } = useFetch(`products/${id}`);
  if (loading) return <Spinner />;
  if (!product) return <PageNotFound />;
  if (error) throw error;

  return (
    <div id="detail">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p id="price">${product.price}</p>

      <select id="size" value={sku} onChange={(e) => setSku(e.target.value)}>
        <option value="">What Size?</option>
        {product.skus.map((sku) => (
          <option key={sku.sku} value={sku.sku}>
            {sku.size}
          </option>
        ))}
      </select>

      <p>
        <button
          className="btn btn-primary"
          disabled={!sku}
          onClick={() => {
            addToCart(id, sku);
            navigate("/cart");
          }}
        >
          Add to cart
        </button>
      </p>
      <img src={`/images/${product.image}`} alt={product.category} />
    </div>
  );
}
