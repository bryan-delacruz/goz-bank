import React from "react";
import { useNavigate } from "react-router-dom";

import { BanknotesIcon,ChevronRightIcon } from '@heroicons/react/24/outline'

export const Products = () => {
  const navigate = useNavigate();


  const array = [1];
  return (
    <div>
      <h2 className="bg-bg-primary text-center pt-6 pb-4 text-secondary font-bold">
        Productos
      </h2>
      <section className="border-y-2 border-bg-secondary">
        {array.map((elem, i) => (
          <button
            key={i}
            className="flex items-center w-full"
            onClick={() => navigate("/login")}
          >
            <div className="w-2 h-24 bg-bg-secondary" />
            <BanknotesIcon className="h-10 my-4 mx-4 text-bg-primary"/>
            <div className="flex flex-col w-full">
              <div className="flex items-center justify-between w-full mb-2">
                <div className="flex flex-col">
                  <p>Cuenta Simple Soles</p>
                  <p>S/ 1000.00</p>
                  <span>Saldo disponible</span>
                </div>
                <ChevronRightIcon className="h-10 text-bg-primary" />
              </div>
              <div
                className={`${
                  i == array.length - 1 ? "hidden" : "w-full"
                } h-0.5 bg-primary`}
              />
            </div>
          </button>
        ))}
      </section>
    </div>
  );
};
