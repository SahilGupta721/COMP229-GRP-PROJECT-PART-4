/*
Web App Name = SELL USED PRODUCTS SITE

Description = Motive of this full-stack application is to allow users to perform CRUD operations on Advertisements related to any product, also users can post and see questions and answers.

GROUP-2, ELITES
SAHIL GUPTA(Product Manager)
Student_Id = 301436261
MICHAEL ASFEHA(Senior Software Engineer)
Student_Id = 301411864
*/


import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Header from "./components/layout/Header"; 
import Footer from "./components/layout/Footer"; 
import Home from "./components/Home"; 
import About from "./components/About"; 
import ListAds from "./components/ads/Listingads"; 
import AddAds from "./components/ads/Addingads"; 
import EditAds from "./components/ads/Editingads"; 
import Signin from "./components/auth/Signin"; 
import AddUser from "./components/auth/AddUser"; 
import NotFound from "./components/NotFound"; 
import PrivateRoute from "./components/auth/PrivateRoute"; 
import AskQuestion from "./components/questions/AskQuestion"; 
import QuestionsAndAnswers from "./components/questions/QuestionsAndAnswers";

import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/js/all.min.js";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ads/list" element={<ListAds />} />
        <Route path="/ads/add" element={
          <PrivateRoute>
            <AddAds />
          </PrivateRoute>} />
        <Route path="/ads/edit/:id" element={
          <PrivateRoute>
            <EditAds />
          </PrivateRoute>} />
        <Route path="/users/signin" element={<Signin />} />
        <Route path="/users/signup" element={<AddUser />} />
        <Route path="/questions/ask/:adId" element={<AskQuestion />} />
        <Route path="/questions/answers/:adId" element={
            <QuestionsAndAnswers />
          } />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

