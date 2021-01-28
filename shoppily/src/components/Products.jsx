import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import useFetch from "../services/useFetch"; // custom hook
import PageNotFound from "./PageNotFound";

export default function Products() {
  const [size, setSize] = useState("");
  const { category } = useParams(); //url-parameter

  const { data: products, loading, error } = useFetch(
    "products?category=" + category
  );

  function renderProduct(p) {
    return (
      <div key={p.id} className="product">
        <Link to={`/${category}/${p.id}`}>
          <img src={`/images/${p.image}`} alt={p.name} />
          <h3>{p.name}</h3>
          <p>${p.price}</p>
        </Link>
      </div>
    );
  }

  if (error) throw error;
  if (loading) return <Spinner />;
  if (products.length === 0) return <PageNotFound />;

  if (category === "shoes") {
    const filteredProducts = size
      ? products.filter((p) => p.skus.find((s) => s.size === parseInt(size)))
      : products;

    return (
      <>
        <section id="filters">
          <label htmlFor="size">Filter by Size:</label>{" "}
          <select
            id="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="">All sizes</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </section>
        {size && <h2>Found {filteredProducts.length} items </h2>}
        <section id="products">{filteredProducts.map(renderProduct)}</section>
      </>
    );
  }

  return (
    <>
      <section id="filters">
        <section id="products">{products.map(renderProduct)}</section>
      </section>
    </>
  );
}
