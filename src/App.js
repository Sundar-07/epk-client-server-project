import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Dashboard from "./components/Home/Dashboard";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Builders from "./components/Builders/Builders";
import Adpackage from "./components/Adspackage/Adpackage";
import ViewDetail from "./components/ViewDetail";
import FeaturedHeader from "./components/Header/FeaturedHeader";
import PostPropertyForm from "./components/PostProperty/PostPropertyForm";

function App() {
  return (
    <div>
      <Header />
      {/* <FeaturedHeader /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="builders" element={<Builders />} />
          <Route path="adspackage" element={<Adpackage />} />
          <Route path="viewdetail" element={<ViewDetail />} />
          <Route path="post-property" element={<PostPropertyForm />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
