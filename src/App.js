import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import NotFound from "./components/NotFound";
import ListAds from "./components/ads/Listingads";
import AddAds from "./components/ads/Addingads";
import EditAds from "./components/ads/Editingads";
import Signin from "./components/auth/Signin";
import PrivateRoute from "./components/auth/PrivateRoute";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/js/all.min.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="ads/list" element={<ListAds />} />
          <Route path="ads/add" element={
            <PrivateRoute>
              <AddAds />
            </PrivateRoute>} />
          <Route path="ads/edit/:id" element={
            <PrivateRoute>
              <EditAds />
            </PrivateRoute>} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
          <Route path="users/signin" element={<Signin />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
