"use client";
import React from "react";
import { QunatityHandle } from ".";
import { priceFormat } from "@/utils/priceFormat";
import { useCart } from "@/hooks/Carthook";
import Image from "next/image";
import { Transform } from "@/utils/StringTransform";
import Link from "next/link";

const CartItemContent = ({ product }) => {
  console.log(product);
  const { handleCartQuantityDec, handleCartQuantityInc,removeProductToCart } = useCart();
  return (
    <>
      <div className="grid grid-cols-5 gpa-2 pb-2 text-xs items-center">
        <div className="col-span-2 flex gap-2">
          <Link href={`/product/${product.id}`}>
            <div className="relative w-[80px] aspect-square">
              <Image
                src={product.selectImg.image}
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <div className="flex flex-col justify-center">
            <Link href={`/product/${product.id}`}>{Transform(product.name)}</Link>
            <span>{product.selectImg.color}</span>
            <div>
              <button onClick={()=>removeProductToCart(product.id)} className="underline tex-slate-700 font-bold">Remove</button>
            </div>
          </div>
          
        </div>

        <div className="justify-self-center font-bold">
          {priceFormat(product.price)}
        </div>
        <div className="justify-self-center">
          <QunatityHandle
            cart={true}
            cartProduct={product}
            handleQuanDec={() => handleCartQuantityDec(product.id)}
            handleQuanInc={() => handleCartQuantityInc(product.id)}
          />
        </div>

        <div className="justify-self-end font-bold">
          {priceFormat(product.price * product.quantity)}
        </div>
      </div>
      <hr className="border-[1.5px] mt-4 mb-4 border-gray-400" />
    </>
  );
};

export default CartItemContent;
