import React from "react";

import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";

import Category from "./pages/category";

function App() {
  return (
    <div className="container py-3" >
      <Header />
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="category/:slug" element={<Category />} />
        </Routes>
      </HashRouter>

      <Footer />
    </div>
  );
}

export default App;
