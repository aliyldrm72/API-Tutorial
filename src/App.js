import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/home";

function App() {
  return (
    <div>
    <Header />

  <HashRouter><Routes>
    <Route index element={<Home />} />
    <Route path="Login" element={<Login />} />
    </Routes>

    </HashRouter>
    </div>
    
  );
}


export default App;
