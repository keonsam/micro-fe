import React from "react";
import ReactDOM from "react-dom";
import Footer from "home/Footer";
import Header from "home/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.scss";
import PDPContent from "./PDPContent";

const App = () => (
  <BrowserRouter>
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <Routes>
        <Route path="/products/:id" element={<PDPContent />} />
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
