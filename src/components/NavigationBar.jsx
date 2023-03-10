import React from "react";
import { WalletIcon,QrCodeIcon, Cog8ToothIcon} from '@heroicons/react/24/outline'


export const NavigationBar = () => {
  return (
    <div className="fixed bottom-0 bg-bg-primary w-full px-6 flex items-center justify-around h-24 text-secondary">
      <button className="pt-2 px-4 flex flex-col items-center">
        <WalletIcon className="h-8 text-bg-secondary mb-2" />
        <span className="self-center text-xs text-bg-secondary">Productos</span>
      </button>
      <button className="pt-2 px-4 flex flex-col items-center">
        <QrCodeIcon className="h-8 text-secondary mb-2" />
        <span className="self-center text-xs">Scan</span>
      </button>
      <button className="pt-2 px-4 flex flex-col items-center">
        <Cog8ToothIcon className="h-8 text-secondary mb-2" />
        <span className="self-center text-xs">Más</span>
      </button>
    </div>
  );
};
