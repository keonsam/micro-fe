import React, { useState, useEffect, useRef } from "react";
import { getProductById } from "home/products";
import { useParams } from "react-router-dom";
import placeAddToCart from "addtocart/placeAddToCart";

export default function PDPContent() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const addToCart = useRef(null);

  useEffect(() => {
    getProductById(id).then(setProduct);
  }, []);

  useEffect(() => {
    if (addToCart.current && !addToCart.current.added) {
      addToCart.current.added = true;
      placeAddToCart(addToCart.current, id);
    }
  }, [addToCart, product])

  return (
    <div className="my-10 grid grid-cols-2 gap-5">
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        <div className="flex">
          <div className="flex-bold text-3xl flex-grow">{product.name}</div>
          <div className="flex-bold text-3xl flex-end">{product.price}</div>
        </div>
        <div ref={addToCart}></div>
        <div className="mt-10">{product.description}</div>
        <div className="mt-10">{product.longDescription}</div>
      </div>
    </div>
  );
}
