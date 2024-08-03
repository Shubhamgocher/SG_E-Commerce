"use client";
import { Provider } from "@/hooks/Carthook";
import React, { useCallback, useEffect, useState } from "react";

const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalQty,setTotalQty]=useState(0);
  const [totalPrice,setTotalPrice]=useState(0);
  //console.log("cartProducts",cartProducts)
  const addProductToCart = useCallback(
    (product) => {
      setCartProducts((prev) => (prev ? [...prev, product] : [product]));
    },
    [cartProducts]
  );
  console.log("cartProducts", cartProducts);
  const removeProductToCart = (id) => {
    setCartProducts((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCartQuantityDec = useCallback(
    (id) => {
      if (cartProducts) {
        let upadatedCart = [...cartProducts];
        const idx = cartProducts.findIndex((item) => item.id === id);
        if (idx > -1) {
          if(upadatedCart[idx].quantity===1)return;
          upadatedCart[idx].quantity = --upadatedCart[idx].quantity;
        }
        setCartProducts(upadatedCart);
      }
    },
    [cartProducts]
  );
  const handleCartQuantityInc = useCallback(
    (id) => {
      if (cartProducts) {
        let upadatedCart = [...cartProducts];
        const idx = cartProducts.findIndex((item) => item.id === id);
        if (idx > -1) {
          if(upadatedCart[idx].quantity===99)return;
          upadatedCart[idx].quantity = ++upadatedCart[idx].quantity;
        }
        setCartProducts(upadatedCart);
      }
    },
    [cartProducts]
  );

  useEffect(()=>{
    if(cartProducts.length>0){
      const acc=cartProducts?.reduce((acc,item)=>{
        (acc.total+=item.quantity*item.price);
        acc.qty+=item.quantity;
        return acc;

      },{total:0,qty:0})
      console.log(acc);
      setTotalPrice(acc.total);
      setTotalQty(acc.qty);
    }
  },[cartProducts])

  useEffect(() => {
    if (typeof window !== undefined) {
      const cartProducts = localStorage.getItem("eCartProducts");
      console.log("Hellow2");
      if (cartProducts) setCartProducts(JSON.parse(cartProducts));
    }
  }, []);
  useEffect(() => {
    if (typeof window !== undefined) {
      localStorage.setItem("eCartProducts", JSON.stringify(cartProducts));
    }

    console.log("Hellow", cartProducts);
  }, [cartProducts]);

  return (
    <Provider
      value={{
        cartProducts,
        addProductToCart,
        removeProductToCart,
        handleCartQuantityDec,
        handleCartQuantityInc,
        totalQty,
        totalPrice,
      }}
    >
      {children}
    </Provider>
  );
};

export default CartProvider;
