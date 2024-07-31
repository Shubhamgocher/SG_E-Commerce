import React from "react";
import Image from "next/image";
import banner from "../public/banner-image.png";
function HomeBanner() {
  return (
    <div className="relative bg-gradient-to-r from-sky-500 to-sky-700">
      <div className="flex flex-col md:flex-row items-center justify-evenly">
        <div className="py-1 flex flex-col gap-2">
          <h1 className="text-white font-bold text-5xl mb-2">Summer Sale</h1>
          <p className="text-slate-400 text-xl mb-1">
            Enjoy discounts on selected items
          </p>
          <h1 className="text-orange-400 font-bold text-3xl mb-2">GET 50% OFF</h1>
        </div>
        <div className="w-1/3 relative aspect-video">
          <Image src={banner} fill alt="image" className="object-contain" />
        </div>
      </div>
    </div>
  );
}

export default HomeBanner;
