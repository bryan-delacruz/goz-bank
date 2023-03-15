import "./App.css";
import { Login } from "./components/Login";

import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "./components/Home";
import { MenuLayout } from "./layout/MenuLayout";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
    console.log("app");
  }, []);

  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Login />} />
      {/* <Route element={<MenuLayout />}>
        <Route exact path="home" element={<Home />} />
      </Route> */}
      <Route path="*" element={<Login />} />
    </Routes>
  );
}

export default App;
