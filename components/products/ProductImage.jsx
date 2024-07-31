import React from "react";
import Image from "next/image";
const ProductImage = ({ images, cartProduct, handelColor }) => {
  return (
    <div className="grid grid-cols-8 h-full max-h-[500px] min-h-[300px] md:min-h-[400px] gap-4">
      <div className="flex flex-col items-center justify-center border-2 h-full max-h-[500px] min-h-[300px] md:min-h-[300px] shadow-md gap-2 cursor-pointer">
        {images.map((image) => (
          <div
            key={image.color}
            onClick={()=>handelColor(image)}
            className={`flex items-center justify-center relative w-[80%] aspect-square  border-teal-300  ${
              cartProduct.selectImg.color === image.color
                ? "border-[1.2px]"
                : "border-none"
            } `}
          >
            <Image src={image.image} fill className="object-contain p-[2px]" />
          </div>
        ))}
      </div>
      <div className="col-span-5 relative aspect-square">
        <Image src={cartProduct.selectImg.image} fill className="w-full h-full object-contain max-h-[500px] min-h-[300px] md:min-h-[400px]"/>
      </div>
    </div>
  );
};

export default ProductImage;
