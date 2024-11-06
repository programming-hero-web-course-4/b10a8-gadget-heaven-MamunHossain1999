import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

export default function AllProduct() {
  const data = useLoaderData(); 
  const { category } = useParams(); 
  const [products, setProducts] = useState([]); 

  useEffect(() => {
    if (category && category !== "All Product") {
      
      const filteredByCategory = data.filter(product => product.category === category);
      setProducts(filteredByCategory);
    } else {
     
      setProducts(data);
    }
  }, [category, data]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 gap-4">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
