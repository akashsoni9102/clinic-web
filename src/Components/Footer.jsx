import React from "react";
import { Box, Typography, Button, Link, SvgIcon } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

// Custom X (Twitter) icon using SvgIcon
const XIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24">
    <path d="M18.36 3H21L14.9 10.17L22.44 21H16.68L12.07 14.78L6.82 21H3L9.48 13.39L2.2 3H8.15L12.34 8.67L18.36 3ZM17.25 19.5H18.74L8.01 4.5H6.43L17.25 19.5Z" />
  </SvgIcon>
);

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: "#0b2545",
        color: "white",
        px: 3,
        py: 4,
        textAlign: "center",
      }}
    >
      {/* Top Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 3,
          flexWrap: "wrap",
        }}
      >
        {/* Address & CTA */}
        <Box sx={{ flex: 1, minWidth: 200 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Our Address
          </Typography>
          <Typography variant="body2">
            Arcadia 604, 6th Floor, South City II, Sector 49, Gurugram, Haryana
            122018
            <br />
            Phone: 0124-4367729, 9310115620
          </Typography>
          <Button
            variant="contained"
            size="small"
            sx={{ mt: 2, backgroundColor: "#2ecc71", fontWeight: "bold" }}
            onClick={() => {
              navigate("/AppointmentBooking");
              window.scrollTo(0, 0);
            }}
          >
            Book Appointment
          </Button>
        </Box>

        {/* Contact Info */}
        <Box sx={{ flex: 1, minWidth: 200 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body2">Email:</Typography>
          <Link
            href="mailto:stratumskinclinic@gmail.com"
            color="inherit"
            underline="none"
          >
            stratumskinclinic@gmail.com
          </Link>

          <Typography variant="body2" mt={2}>
            Phone:
          </Typography>
          <Link
            href="tel:+919310115620"
            color="inherit"
            underline="none"
            display="block"
          >
            (+91) 9310115620
          </Link>
          <Link
            href="tel:+919711223686"
            color="inherit"
            underline="none"
            display="block"
          >
            (+91) 9711223686
          </Link>
          <Link
            href="tel:+911244367729"
            color="inherit"
            underline="none"
            display="block"
          >
            0124-4367729
          </Link>
        </Box>

        {/* Social Media */}
        <Box sx={{ flex: 1, minWidth: 200 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Follow Us
          </Typography>
          <Box
            display="flex"
            justifyContent={{ xs: "center", md: "flex-start" }}
            gap={3}
            ml={{ xs: 0, md: 16 }}
            pt={0.5} // Adjust the value as needed (e.g., 2, 3 for more padding)
          >
            <Link
              href="https://x.com/manishsoni2003"
              target="_blank"
              color="inherit"
            >
              <XIcon fontSize="small" />
            </Link>
            <Link
              href="https://www.facebook.com/drmanishsonidermatology/cd"
              target="_blank"
              color="inherit"
            >
              <Facebook fontSize="small" />
            </Link>
            <Link
              href="https://www.instagram.com/dr_manishsoni"
              target="_blank"
              color="inherit"
            >
              <Instagram fontSize="small" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/dr-manish-soni-30846927/"
              target="_blank"
              color="inherit"
            >
              <LinkedIn fontSize="small" />
            </Link>
          </Box>
        </Box>
      </Box>

      {/* Google Map */}
      <Box mt={4}>
        <iframe
          title="Stratum Skin Clinic Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.697379394323!2d77.04375211508396!3d28.638654682418193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18b02bb15b07%3A0x545a570dcf354f4c!2sArcadia%2C%20South%20City%20II%2C%20Sector%2049%2C%20Gurugram%2C%20Haryana%20122018!5e0!3m2!1sen!2sin!4v1681380961337!5m2!1sen!2sin"
          width="100%"
          height="160"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>

      {/* Copyright */}
      <Typography variant="caption" color="white" mt={3} display="block">
        © {new Date().getFullYear()} Stratum Skin & Hair Clinic. All rights
        reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
