import React from "react";

const ColourSlector = ({ images, handelColor, cartProduct }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="font-semibold">Color:</span>
      <div className="flex gap-2">
        {images.map((image) => (
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center border-gray-600 ${
              cartProduct.selectImg.color === image.color
                ? "border-2"
                : "border:none"
            }`}
           onClick={()=>handelColor(image)}
          >
            <div
              style={{ backgroundColor: image.colorCode }}
              className="w-5 h-5 rounded-full"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColourSlector;
