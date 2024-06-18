"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const sortOrder = {
    xl: 1,
    grande: 2,
    mediano: 3,
    pequeño: 4,
  };

  const getPriority = (title) => {
    for (const size in sortOrder) {
      if (title.toLowerCase().includes(size)) {
        return sortOrder[size];
      }
    }
    return 5; // Valor por defecto para productos que no contienen ninguna de las palabras clave
  };

  const sortProducts = (products) => {
    return products.sort(
      (a, b) =>
        getPriority(a.title.toLowerCase()) - getPriority(b.title.toLowerCase())
    );
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        const sortedProducts = sortProducts(response.data.data);
        setProducts(sortedProducts);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

export default useProducts;
