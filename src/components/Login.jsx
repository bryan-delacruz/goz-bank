import React from "react";

const Login = () => {
  return (
    <div className="h-screen bg-gray-400 flex flex-col items-center px-4">
      <h1 className=" text-gray-900 font-bold text-3xl mt-36 mb-24">
        GOZ BANK
      </h1>
      <form className="bg-gray-200 text-gray-600 w-full pt-12  flex flex-col justify-center rounded-md ">
        <div className="mx-6 flex flex-col gap-6">
          <input
            className="bg-gray-200 outline-none border-b border-gray-300 hover:border-gray-800"
            type="text"
            placeholder="Número de tarjeta"
          />
          <div className="flex flex-row gap-2">
            <select className="w-16 bg-gray-200" name="" id="">
              <option>DNI</option>
            </select>
            <input
              className="w-full bg-gray-200 outline-none border-b border-gray-300 hover:border-gray-800"
              type="text"
              placeholder="Número de documento"
            />
          </div>
          <input
            className="bg-gray-200 outline-none border-b border-gray-300 hover:border-gray-800"
            type="password"
            placeholder="Clave web"
          />
          <div className="flex flex-row gap-2">
            <input type="checkbox" />
            <p>Recordar datos</p>
          </div>
        </div>
        <button className="bg-gray-600 text-white w-40 mx-auto my-4 py-2 rounded-md hover:bg-gray-800">
          Ingresar
        </button>
        <div className="bg-gray-600 text-gray-200 flex flex-row justify-center text-sm py-4 rounded-b-md">
          <button className="hover:text-gray-800">Regístrate</button>
          <span className="mx-2">|</span>
          <button className="hover:text-gray-800">Olvidé mi clave web</button>
          <span className="mx-2">|</span>
          <button className="hover:text-gray-800">Ayuda</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
