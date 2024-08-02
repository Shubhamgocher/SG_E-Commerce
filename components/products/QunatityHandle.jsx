import React from "react";

const QunatityHandle = ({ cartProduct,handleQuanDec,handleQuanInc,cart}) => {
  return (
    <div className="flex items-center gap-2">
      {!cart && <span className="font-semibold">Quantity:</span>}
      <div className="flex justify-center items-center gap-2">
        <button
          className="w-5 h-5 rounded-md border-slate-300 border-2 flex items-center justify-center"
          onClick={handleQuanDec}
        >
          -
        </button>
        <span>{cartProduct.quantity}</span>
        <button
          className="w-5 h-5 rounded-md border-slate-300 border-2 flex items-center justify-center"
          onClick={handleQuanInc}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default QunatityHandle;
