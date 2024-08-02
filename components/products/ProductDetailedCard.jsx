"use client";
import { Rating } from "@mui/material";
import { MdCheckCircle } from "react-icons/md";
import React, { useCallback, useEffect, useState } from "react";
import ColourSlector from "./ColourSlector";
import { Button, ListReviews, ProductImage, QunatityHandle } from "..";
import { useCart } from "@/hooks/Carthook";
import { useRouter } from "next/navigation";
const Horizontal = () => {
  return <hr className="w-[30%] my-2 border-slate-600 border-[1.2px]" />;
};

function ProductDetailedCard({ singleProduct }) {
  const router=useRouter();
  const [cartProduct, setCartProduct] = useState({
    id: singleProduct.id,
    name: singleProduct.name,
    price: singleProduct.price,
    brand: singleProduct.brand,
    category: singleProduct.category,
    quantity: 1,
    selectImg: singleProduct.images[0],
  });
  const [isProductInCart, setIsProductInCart] = useState(false);
  //console.log("cartP", cartProduct);
  const { cartProducts, addProductToCart } = useCart();
  console.log("cartProducts", cartProducts);

  const handelColor = useCallback(
    (image) => setCartProduct((prev) => ({ ...prev, selectImg: image })),
    [cartProduct]
  );

  useEffect(() => {
    setIsProductInCart(false);
    const isIndex = cartProducts.findIndex(
      (item) => item.id === cartProduct.id
    );
    if (isIndex > -1) setIsProductInCart(true);
  }, [cartProducts]);
  const handleQuanInc = useCallback(
    () =>
      setCartProduct((prev) =>
        prev.quantity === 99
          ? { ...prev }
          : { ...prev, quantity: prev.quantity + 1 }
      ),
    [cartProduct]
  );
  const handleQuanDec = useCallback(
    () =>
      setCartProduct((prev) =>
        prev.quantity == 1
          ? { ...prev }
          : { ...prev, quantity: prev.quantity - 1 }
      ),
    [cartProduct]
  );

  const productRating =
    singleProduct.reviews.reduce((acc, item) => item.rating + acc, 0) /
    singleProduct.reviews.length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <ProductImage
        images={singleProduct.images}
        cartProduct={cartProduct}
        handelColor={handelColor}
      />
      <div className=" w-full flex flex-col gap-2">
        <h1 className="text-3xl font-semibold">{singleProduct.name}</h1>
        <div className="flex items-center gap-4">
          <Rating value={productRating} />
          <div>{singleProduct.reviews.length} reviews</div>
        </div>
        <Horizontal />
        <div className="text-justify">{singleProduct.description}</div>
        <Horizontal />
        <div>
          <span className="font-semibold mr-2">Category:</span>
          {singleProduct.category}
        </div>
        <div>
          <span className="font-semibold mr-2">Brand:</span>
          {singleProduct.brand}
        </div>
        <div
          className={singleProduct.inStock ? "text-green-500" : "text-red-400"}
        >
          {singleProduct.inStock ? "In Stock" : "Out of Stock"}
        </div>
        <Horizontal />
        {isProductInCart ? (
          <>
            <p className="flex items-center gap-2">
              <MdCheckCircle className="text-green-400"
              size={20}/>
              <span className="font-semibold">Product is in cart.</span>
            </p>
            <Button label="View Cart" outline onclick={()=>router.push('/cart')}/>
          </>
        ) : (
          <>
            <div>
              <ColourSlector
                images={singleProduct.images}
                handelColor={handelColor}
                cartProduct={cartProduct}
              />
            </div>
            <Horizontal />
            <div>
              <QunatityHandle
                cartProduct={cartProduct}
                handleQuanDec={handleQuanDec}
                handleQuanInc={handleQuanInc}
              />
            </div>
            <Horizontal />
            <Button
              label="Add to Cart"
              onclick={() => addProductToCart(cartProduct)}
            />
          </>
        )}
      </div>
      <div className="flex flex-col justify-center mt-10">
        <div>Add reviews</div>
        <ListReviews reviews={singleProduct.reviews} />
      </div>
    </div>
  );
}

export default ProductDetailedCard;
