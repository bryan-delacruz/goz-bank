import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { pathname } = location;

  const isLogin = pathname === "/login" ? true : false;

  return (
    <div className="h-screen bg-bg-primary flex flex-col items-center px-4">
      <h1 className=" text-primary font-bold text-3xl mt-36 mb-16 text-center text leading-7">
        GOZ <br />
        BANK
      </h1>
      <form className="bg-secondary text-primary w-full pt-12  flex flex-col justify-center rounded-md ">
        <div className="mx-6 flex flex-col gap-6">
          <input
            className="bg-secondary outline-none border-b hover:border-primary"
            type="text"
            placeholder="Número de tarjeta"
          />
          <div className="flex flex-row gap-2">
            <select className="w-16 bg-secondary" name="" id="">
              <option>DNI</option>
            </select>
            <input
              className="w-full bg-secondary outline-none border-b  hover:border-primary"
              type="text"
              placeholder="Número de documento"
            />
          </div>
          <input
            className="bg-secondary outline-none border-b  hover:border-primary"
            type="password"
            placeholder="Clave web"
          />
          <div className="flex flex-row gap-2">
            <input type="checkbox" />
            <p>Recordar datos</p>
          </div>
        </div>
        {isLogin ? (
          <button
            className="bg-primary text-secondary w-40 mx-auto my-4 py-2 rounded-md hover:bg-bg-primary"
            onClick={() => navigate("/home/products")}
          >
            Ingresar
          </button>
        ) : (
          <button
            className="bg-primary text-secondary w-40 mx-auto my-4 py-2 rounded-md hover:bg-bg-primary"
            onClick={() => navigate("/home/products")}
          >
            Registrarse
          </button>
        )}
        <div className="bg-primary text-secondary flex flex-row justify-center text-sm py-4 rounded-b-md">
          {isLogin ? (
            <button
              className="hover:text-bg-secondary"
              onClick={() => navigate("/register")}
            >
              Regístrate
            </button>
          ) : (
            <button
              className="hover:text-bg-secondary"
              onClick={() => navigate("/login")}
            >
              Iniciar Sesión
            </button>
          )}

          <span className="mx-2">|</span>
          <button
            className="hover:text-bg-secondary"
            onClick={() => alert("Sin funcionalidad por el momento")}
          >
            Olvidé mi clave web
          </button>
          <span className="mx-2">|</span>
          <button
            className="hover:text-bg-secondary"
            onClick={() => alert("Sin funcionalidad por el momento")}
          >
            Ayuda
          </button>
        </div>
      </form>
    </div>
  );
};
