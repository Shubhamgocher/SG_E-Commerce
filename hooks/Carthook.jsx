import { createContext, useContext } from "react"

export const cartContext=createContext({
    cartProducts:[null],
    totalQty:0,
    totalPrice:0,
    addProductToCart:(product)=>{},
    removeProductToCart:(id)=>{},
    handleCartQuantityInc:(id)=>{},
    handleCartQuantityDec:(id)=>{},
    

});

export const Provider=cartContext.Provider;

export const useCart=()=>useContext(cartContext);