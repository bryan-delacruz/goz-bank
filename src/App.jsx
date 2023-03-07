import "./App.css";
import Login from "./components/Login";

import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
    </Routes>
  );
}

export default App;
