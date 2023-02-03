import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import HomeContent from "./HomeContent";
import PDPContent from "pdp/PDPContent";
import CartContent from "cart/CartContent";

import "./index.scss";

const App = () => (
  <BrowserRouter>
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/cart" element={<CartContent />} />
        <Route path="/products/:id" element={<PDPContent />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
