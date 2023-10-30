import productImage from "./asset/images/image-product-desktop.jpg";
import productImage_m from "./asset/images/image-product-mobile.jpg";

import { ShoppingCartOutlined } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";

export default function App() {
  //TODO: implementing responsive image replacment
  const isLarge = useMediaQuery("(min-width: 768px)");

  return (
    <div className="grid min-h-screen place-content-center bg-primary-cream">
      <div className="m-auto flex flex-col rounded-2xl bg-neutral-white w-[21.5rem] md:w-[43rem] md:flex-row">
        <img
          src={isLarge ? productImage : productImage_m}
          alt="logo"
          className="rounded-t-2xl md:rounded-l-2xl md:w-1/2"
        />
        <div className="flex max-h-full gap-4 flex-col justify-between p-8 md:w-1/2 ">
          <h4 className=" w-full font-montserrat text-lg tracking-[0.3rem] text-neutral-darkGrayishBlue">
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
            <h2 className="font-fraunces text-4xl font-bold leading-none text-primary-darkCyan">
              $149.99
            </h2>
            <p className="flex items-center justify-center text-neutral-darkGrayishBlue line-through">
              $169.99
            </p>
          </div>
          <button className="rounded-xl bg-primary-darkCyan py-4 text-neutral-white hover:bg-primary-darkGreen">
            <ShoppingCartOutlined /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
