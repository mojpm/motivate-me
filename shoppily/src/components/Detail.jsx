import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../services/useFetch";
import Spinner from "./Spinner";
import PageNotFound from "./PageNotFound";
import { useCart } from "../cartContext";

export default function Detail() {
  const { dispatch } = useCart();
  const { category, id } = useParams();
  const navigate = useNavigate();
  const [sku, setSku] = useState("");

  const { data: product, loading, error } = useFetch(`products/${id}`);

  if (loading) return <Spinner />;
  if (!product) return <PageNotFound />;
  if (error) throw error;

  if (category === "shoes") {
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
              dispatch({ type: "addToCart", id, sku });
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

  return (
    <div id="detail">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p id="price">${product.price}</p>
      <p>
        <button
          className="btn btn-primary"
          onClick={() => {
            dispatch({ type: "addToCart", id, sku });
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
