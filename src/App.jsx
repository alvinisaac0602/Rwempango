import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Finance from "./Pages/Finance";
import Agricproducts from "./Pages/Agricproducts";
import Realestate from "./Pages/Realestate";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/agricproducts" element={<Agricproducts />} />
        <Route path="/realestate" element={<Realestate />} />
        <Route path="/finance" element={<Finance />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
