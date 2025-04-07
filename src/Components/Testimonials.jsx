import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import testi1 from "../assets/testi1.jpeg";
import testi2 from "../assets/testi2.jpeg";
import testi3 from "../assets/testi3.jpeg";
import testi4 from "../assets/testi4.jpeg";
import testi5 from "../assets/testi5.jpeg";

const testimonials = [
  {
    id: 1,
    text: "This service is amazing! The doctors are highly professional, and booking an appointment was so easy.",
    image: testi1,
    name: "John Doe",
    position: "Software Engineer",
  },
  {
    id: 2,
    text: "I had a great experience! The consultation was seamless, and the doctor was very helpful.",
    image: testi2,
    name: "Jane Smith",
    position: "Marketing Manager",
  },
  {
    id: 3,
    text: "Highly recommend this service! It saved me so much time and effort in finding the right specialist.",
    image: testi3,
    name: "Michael Johnson",
    position: "Entrepreneur",
  },
  {
    id: 4,
    text: "Highly recommend this service! It saved me so much time and effort in finding the right specialist.",
    image: testi4,
    name: "Virat Kohli",
    position: "Cricketer",
  },
  {
    id: 5,
    text: "Highly recommend this service! It saved me so much time and effort in finding the right specialist.",
    image: testi5,
    name: "Rohit Sharma",
    position: "Cricketer",
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        minHeight: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#DDE6ED",
        overflow: "hidden",
        px: 2,
        py: 6,
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={testimonials[index].id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            maxWidth: "900px",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          {/* Left Section - Text */}
          <Box
            sx={{
              flex: 1,
              p: 3,
              minWidth: "300px",
              maxWidth: "450px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              sx={{ color: "#27374D" }}
            >
              {testimonials[index].text}
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#526D82", mt: 2 }}
            >
              - {testimonials[index].name}, {testimonials[index].position}
            </Typography>
          </Box>

          {/* Right Section - Image */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minWidth: "250px",
            }}
          >
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              style={{
                width: "100%",
                maxWidth: "250px",
                borderRadius: "10px",
                objectFit: "cover",
              }}
            />
          </Box>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default Testimonials;
