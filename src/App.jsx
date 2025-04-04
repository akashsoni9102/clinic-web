import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Gallery from "./Components/Gallery/Gallery";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";

import PostDetail from "./Components/Blog/PostDetail";
import BlogPage from "./Components/Blog/BlogPage";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppointmentBooking from "./Components/AppointmentBooking";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/testimonials" element={<Testimonials />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/appointmentbooking" element={<AppointmentBooking />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/" element={<BlogPage />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
