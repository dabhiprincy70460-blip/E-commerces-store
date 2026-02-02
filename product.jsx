import { useEffect, useState } from "react";
import api from "../api/api";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      {products.map(p => (
        <div key={p._id}>
          <h3>{p.title}</h3>
          <p>₹{p.price}</p>
        </div>
      ))}
    </div>
  );
}
