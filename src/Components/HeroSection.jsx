import React, { useState, useEffect } from "react";
import { Button, Typography, Container, Box } from "@mui/material";
import heroimage from "../assets/heroimage.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const [patientsCount, setPatientsCount] = useState(0);
  const [doctorsCount, setDoctorsCount] = useState(0);
  const [successRate, setSuccessRate] = useState(0);

  const targetPatients = 50;
  const targetDoctors = 350;
  const targetSuccessRate = 98;

  const duration = 2000;

  useEffect(() => {
    const animateCount = (setCount, target) => {
      const increment = target / (duration / 50);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCount(Math.floor(current));
      }, 50);

      return () => clearInterval(timer);
    };

    animateCount(setPatientsCount, targetPatients);
    animateCount(setDoctorsCount, targetDoctors);
    animateCount(setSuccessRate, targetSuccessRate);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#DDE6ED",
        minHeight: "85vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 3,
        pt: 4,
        pb: 6,
        pl: { xs: 2, md: 6 },
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          gap: 6,
          p: 3,
        }}
      >
        {/* Left Side */}
        <Box sx={{ flex: 1, maxWidth: 500 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Best Dermatologist in Gurgaon City
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Book your appointment online – Fast and Easy!
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button
              variant="contained"
              onClick={() => navigate("/AppointmentBooking")}
              sx={{
                backgroundColor: "#27374D",
                "&:hover": {
                  backgroundColor: "#1a1f2b",
                },
              }}
            >
              Appointment
            </Button>
            <Button
              onClick={() => navigate("/Contact")}
              variant="outlined"
              sx={{
                borderColor: "#27374D",
                color: "#27374D",
                "&:hover": {
                  backgroundColor: "#27374D",
                  color: "#ffffff",
                  borderColor: "#27374D",
                },
              }}
            >
              Enquiry
            </Button>
          </Box>
          <Box
            sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 4 }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{ color: "#27374D" }}
                fontWeight="bold"
              >
                {patientsCount}k+
              </Typography>
              <Typography variant="body2">Happy Patients</Typography>
            </Box>

            <Box>
              <Typography
                variant="h6"
                sx={{ color: "#27374D" }}
                fontWeight="bold"
              >
                {successRate}%
              </Typography>
              <Typography variant="body2">Our Success Rate</Typography>
            </Box>
          </Box>
        </Box>

        {/* Right Side */}
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <img
            src={heroimage}
            alt="Doctor"
            style={{ width: "100%", maxWidth: "350px", borderRadius: "10px" }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
