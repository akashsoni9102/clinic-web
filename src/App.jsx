import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Gallery from "./Components/Gallery/Gallery";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import { CssBaseline, GlobalStyles } from "@mui/material";
import ServiceDetail from "./Components/ServiceDetail";

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
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: {
              margin: 0,
              padding: 0,
              overflowX: "hidden", // 💥 Prevent right-side scroll
            },
          }}
        />
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
          {/* <Route path="/services" element={<ServicePage />} /> */}
          <Route path="/serviceDetail/:id" element={<ServiceDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
