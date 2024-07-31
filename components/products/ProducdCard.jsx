"use client"
import React from "react";
import Image from "next/image";
import { Transform } from "@/utils/StringTransform";
import { priceFormat } from "@/utils/priceFormat";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";
const ProducdCard = ({ name, image, price, reviews,productId}) => {
  const router=useRouter();
  name = Transform(name);
  const productRating=reviews.reduce((acc,item)=>item.rating+acc,0)/reviews.length

  return (
    <div onClick={()=>router.push(`/product/${productId}`)} className="col-span-1 bg-slate-50 border border-slate-200 rounded-lg shadow-lm p-2 transition hover:scale-105 text-sm">
      <div className="flex flex-col items-center w-full gap-1">
        <div className="aspect-square overflow-hidden relative w-full">
          <Image
            src={image}
            alt={name}
            fill
            className="w-full h-full object-contain"
          />
        </div>
        <div className="text-sm mt-2">{name}</div>
        <div>
          <Rating value={productRating} readOnly />
        </div>
        <div>{reviews.length} reviews</div>
        <div className="font-semibold">{priceFormat(price)}</div>
      </div>
    </div>
  );
};

export default ProducdCard;
