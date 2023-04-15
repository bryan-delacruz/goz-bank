import "./App.css";
import { Login } from "./components/Login";

import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Products } from "./components/Products";
import { MenuLayout } from "./layout/MenuLayout";
import { Qr } from "./components/Qr";
import Scan from "./components/Scan";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("home/");
  }, []);

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Login />} />
      <Route path="home" element={<MenuLayout />}>
        <Route path="products" element={<Products />} />
        <Route path="scan" element={<Scan />} />
        <Route path="qr" element={<Qr />} />
      </Route>
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
