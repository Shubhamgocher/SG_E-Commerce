"use client";
import { Provider } from "@/hooks/Carthook";
import React, { useEffect, useState } from "react";

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  //console.log("cartProducts",cartProducts)
  const addProductToCart = (product) => {
    setCartProducts((prev) => (prev ? [...prev, product] : [product]));
  };
  //console.log("cartProducts",cartProducts)
  const removeProductToCart = (id) => {
    setCartProducts((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    console.log("Hellow",cartProducts);
  }, [cartProducts]);

  useEffect(()=>{
    const cartProducts=JSON.parse(localStorage.getItem("cartProducts"));
    console.log("Hellow2",cartProducts);
    setCartProducts(cartProducts);
  },[])

  return (
    <Provider value={{ cartProducts, addProductToCart, removeProductToCart }}>
      {children}
    </Provider>
  );
};

export default CartProvider;
