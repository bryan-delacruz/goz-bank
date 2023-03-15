import React from "react";
import { useNavigate } from "react-router-dom";
import {
  CameraIcon,
  WalletIcon,
  QrCodeIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";

export const NavigationBar = () => {
  const navigate = useNavigate();

  const handleButton = ({ target: { id } }) => {
    navigate(`/home/${id}`);
  };
  return (
    <div className="fixed bottom-0 bg-bg-primary w-full px-6 flex items-center justify-around h-24 text-secondary">
      <button
        id="products"
        className="pt-2 px-4 flex flex-col items-center"
        onClick={(e) => handleButton(e)}
      >
        <WalletIcon className="h-8 text-bg-secondary mb-2 -z-10" />
        <span className="self-center text-xs text-bg-secondary -z-10">
          Productos
        </span>
      </button>
      <button
        id="scan"
        className="pt-2 px-4 flex flex-col items-center"
        onClick={(e) => handleButton(e)}
      >
        <CameraIcon className="h-8 text-secondary mb-2 -z-10" />
        <span className="self-center text-xs -z-10">Scan</span>
      </button>
      <button
        id="qr"
        className="pt-2 px-4 flex flex-col items-center"
        onClick={(e) => handleButton(e)}
      >
        <QrCodeIcon className="h-8 text-secondary mb-2 -z-10" />
        <span className="self-center text-xs -z-10">QR</span>
      </button>
      <button
        id="more"
        className="pt-2 px-4 flex flex-col items-center"
        onClick={(e) => handleButton(e)}
      >
        <Cog8ToothIcon className="h-8 text-secondary mb-2 -z-10" />
        <span className="self-center text-xs -z-10">Más</span>
      </button>
    </div>
  );
};
