import { createContext, useContext } from "react"

export const cartContext=createContext({
    cartProducts:[null],
    addProductToCart:(product)=>{},
    removeProductToCart:(id)=>{},
    

});

export const Provider=cartContext.Provider;

export const useCart=()=>useContext(cartContext);