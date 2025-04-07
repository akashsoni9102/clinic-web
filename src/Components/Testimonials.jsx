import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import isha from "../assets/isha.jpg";
import akash from "../assets/akash.jpg";
import shubhi from "../assets/shubhi.jpg";
import rishabh from "../assets/rishabh.jpg";
import danish from "../assets/danish.jpg";

const testimonials = [
  {
    id: 1,
    text: "The services I receive from Stratum Skin and Hair Clinic are excellent. I would have no qualms recommending them to friends.",
    image: akash,
    name: "Akash",
  },
  {
    id: 2,
    text: "Dr. Manish is incredibly kind, knowledgeable, and professional. My skin improved noticeably within weeks!",
    image: isha,
    name: "Isha Dhuriya",
  },
  {
    id: 3,
    text: "Excellent service, very hygienic clinic, and effective treatment. Dr. Soni truly listens and explains everything clearly.",
    image: shubhi,
    name: "Shubhi Gupta",
  },
  {
    id: 4,
    text: "Wonderful experience! Friendly staff, clean clinic, and personalized care that really made a difference in my skin.",
    image: rishabh,
    name: "Rishabh Tiwari",
  },
  {
    id: 5,
    text: "Highly recommend Dr. Manish! Genuine, polite, and results-driven. My skin feels healthier and more confident now.",
    image: danish,
    name: "Danish Khan",
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
            <Typography variant="body2" sx={{ color: "#526D82", mt: 2 }}>
              - {testimonials[index].name}
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
