import React, { useState, useEffect } from "react";
import { Button, Typography, Container, Box } from "@mui/material";
import heroimage from "../assets/heroimage.png";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  // State for counting numbers
  const [patientsCount, setPatientsCount] = useState(0);
  const [doctorsCount, setDoctorsCount] = useState(0);
  const [successRate, setSuccessRate] = useState(0);

  // Target values
  const targetPatients = 50; // 50k+
  const targetDoctors = 350; // 350+
  const targetSuccessRate = 98; // 98%

  // Animation duration (in milliseconds)
  const duration = 2000; // 2 seconds

  useEffect(() => {
    const animateCount = (setCount, target) => {
      const increment = target / (duration / 50); // Increment per 50ms
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCount(Math.floor(current));
      }, 50); // Update every 50ms

      return () => clearInterval(timer); // Cleanup on unmount
    };

    // Start animations for each number
    animateCount(setPatientsCount, targetPatients);
    animateCount(setDoctorsCount, targetDoctors);
    animateCount(setSuccessRate, targetSuccessRate);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#f0f4ff",
        minHeight: "85vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 3,
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
        {/* Left Side (Text Content) */}
        <Box sx={{ flex: 1, maxWidth: 500 }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Best Dermatologist in Gurgaon City
            <br />
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Book your appointment online – Fast, Easy, Secure!
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button
              variant="contained"
              onClick={() => navigate("/AppointmentBooking")}
            >
              Appointment
            </Button>
            <Button onClick={() => navigate("/Contact")} variant="outlined">
              Enquiry
            </Button>
          </Box>
          <Box
            sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 4 }}
          >
            <Typography variant="h6">
              {patientsCount}k+ <br />
              <small>Happy Patients</small>
            </Typography>
            <Typography variant="h6">
              {doctorsCount}+ <br />
              <small>Specialist Doctors</small>
            </Typography>
            <Typography variant="h6">
              {successRate}% <br />
              <small>Our Success Rate</small>
            </Typography>
          </Box>
        </Box>

        {/* Right Side (Doctor's Image) */}
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
