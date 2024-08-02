import { createContext, useContext } from "react"

export const cartContext=createContext({
    cartProducts:[null],
    totalCartQuan:0,
    addProductToCart:(product)=>{},
    removeProductToCart:(id)=>{},
    handleCartQuantityInc:(id)=>{},
    handleCartQuantityDec:(id)=>{},
    

});

export const Provider=cartContext.Provider;

export const useCart=()=>useContext(cartContext);