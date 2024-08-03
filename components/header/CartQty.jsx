"use client"
import { useCart } from '@/hooks/Carthook';
import React from 'react'
import { CiShoppingCart } from "react-icons/ci";

const CartQty = () => {
    const {totalQty}=useCart()
  return (
    <div className='relative '>
      <CiShoppingCart size={30}/>
      <div className='absolute -top-2 -right-2  w-6 h-6 rounded-full bg-slate-700 font-bold text-white flex justify-center items-center'>{totalQty}</div>
    </div>
  )
}

export default CartQty

