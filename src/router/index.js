import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "../pages/auth/register";
import Login from "../pages/auth/login";
import List from "../pages/product/list";
import Detail from "../pages/product/detail";
import Cart from "../pages/cart";
import History from "../pages/history";
import ThankYouPage from "../pages/thankyouPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace="true" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<List />} />
        <Route path="/product/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/history" element={<History />} />
        <Route path="/thankyoupage" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
