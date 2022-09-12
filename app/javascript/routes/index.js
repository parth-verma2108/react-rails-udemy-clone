import React from "react";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Home from "../components/home";
import Login from "../components/loginForm"

export default (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign_in" element={<Login />} />
      <Route path="/users/sign_out" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
