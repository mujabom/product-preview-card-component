import { useEffect, useState } from "react";
import productImage from "./asset/images/image-product-desktop.jpg";
import productImage_m from "./asset/images/image-product-mobile.jpg";

import { ShoppingCartOutlined } from "@mui/icons-material";

export default function App() {
    //TODO: implementing responsive image replacment
  return (
    <div className="grid min-h-screen place-content-center bg-primary-cream">
      <div className="m-auto flex md:w-5/12 flex-col md:flex-row rounded-2xl bg-neutral-white">
        <img src={productImage} alt="logo" className="md:w-1/2 rounded-l-2xl" />
        <div className="flex max-h-full  md:w-1/2 flex-col justify-between p-8 ">
          <h4 className=" font-montserrat w-full text-lg tracking-[0.3rem] text-neutral-darkGrayishBlue">
            PERFUME
          </h4>
          <h1 className="font-fraunces text-[2.5rem] font-bold leading-none">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="text-base text-neutral-darkGrayishBlue">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex gap-5">
            <h2 className="font-fraunces text-[36px] text-primary-darkCyan font-bold leading-none">
              $149.99
            </h2>
           <p className="flex justify-center items-center text-neutral-darkGrayishBlue line-through">$169.99</p>
          </div>
          <button className="rounded-xl hover:bg-primary-darkGreen bg-primary-darkCyan py-4 text-neutral-white">
            <ShoppingCartOutlined /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
