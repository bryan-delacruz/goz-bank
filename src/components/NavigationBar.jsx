import React from "react";
import { BsWallet2, BsQrCodeScan, BsGear } from "react-icons/Bs";

export const NavigationBar = () => {
  return (
    <div className="fixed bottom-0 bg-bg-primary w-full px-6 flex items-center justify-around h-24 text-secondary">
      <button className="pt-4 px-4 flex flex-col items-center">
        <BsWallet2 className="fill-bg-secondary mb-2" size={"30px"} />
        <span className="self-center text-xs text-bg-secondary">Productos</span>
      </button>
      <button className="pt-4 px-4 flex flex-col items-center">
        <BsQrCodeScan className="fill-secondary mb-2" size={"30px"} />
        <span className="self-center text-xs">Productos</span>
      </button>
      <button className="pt-4 px-4 flex flex-col items-center">
        <BsGear className="fill-secondary mb-2" size={"30px"} />
        <span className="self-center text-xs">Productos</span>
      </button>
    </div>
  );
};
