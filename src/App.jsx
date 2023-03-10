import "./App.css";
import { Login } from "./components/Login";

import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "./components/Home";
import { MenuLayout } from "./layout/MenuLayout";

function App() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   navigate("/register");
  //   console.log("app");
  // }, []);

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Login />} />
      <Route element={<MenuLayout />}>
        <Route path="home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
