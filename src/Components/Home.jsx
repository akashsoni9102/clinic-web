import React from "react";
import HeroSection from "./HeroSection";
import About from "./About";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import BlogPage from "./Blog/BlogPage";

function Home() {
  return (
    <div>
      <HeroSection />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <BlogPage />
    </div>
  );
}

export default Home;
