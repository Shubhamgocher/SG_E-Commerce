"use client";
import React from "react";
import { Button, CartItemContent, Heading } from ".";
import { useCart } from "@/hooks/Carthook";
import { priceFormat } from "@/utils/priceFormat";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
const Horizontal = () => (
  <hr className="border-[1.5px] mt-4 mb-4 border-gray-400" />
);
const Cart = () => {
  const { cartProducts } = useCart();

  return (
    <div>
      <div className="flex items-center justify-center mb-6">
        <Heading heading="Shopping Cart" />
      </div>
      <div className="grid grid-cols-5 text-xs gap-2 pb-2 items-center">
        <div className="col-span-2">PRODUCT</div>
        <div className="justify-self-center">PRICE</div>
        <div className="justify-self-center">QUANTITY</div>
        <div className="justify-self-end">TOTAL</div>
      </div>
      <Horizontal />
      {cartProducts.map((product) => (
        <CartItemContent key={product.id} product={product} />
      ))}
      <div className="w-full">
        <div className="flex justify-between">
          <div>
            <button className="text-white border-[1.2px] border-slate-700 bg-slate-300 rounded-lg cursor-pointer p-2 text-bold hover:bg-slate-400 w-[120px]">
              Clear cart
            </button>
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between gap-20">
              <span className="font-bold">subtotal</span>
              <span className="font-bold">$1000</span>
            </div>
            <p className="tex-sm">
              Taxes and shipping are calculated at checkout.
            </p>
            <Button label={"checkout"} />
            <Link href={"/"} className=" flex items-center mt-2">
               <MdArrowBack/>
              <span>Continue shopping</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
