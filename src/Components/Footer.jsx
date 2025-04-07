import React from "react";
import {
  Box,
  Typography,
  Button,
  Link,
  SvgIcon,
  Grid,
  Paper,
} from "@mui/material";
import { Facebook, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const XIcon = (props) => (
  <SvgIcon {...props} viewBox="0 0 24 24" htmlColor="#DDE6ED">
    <path d="M18.36 3H21L14.9 10.17L22.44 21H16.68L12.07 14.78L6.82 21H3L9.48 13.39L2.2 3H8.15L12.34 8.67L18.36 3ZM17.25 19.5H18.74L8.01 4.5H6.43L17.25 19.5Z" />
  </SvgIcon>
);

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: "#27374D", color: "#DDE6ED", px: 3, py: 5 }}>
      <Grid
        container
        columns={{ xs: 12, md: 12 }}
        columnSpacing={3}
        rowSpacing={4}
      >
        {/* Our Address */}
        <Grid gridColumn={{ xs: "span 12", md: "span 4" }}>
          <Paper
            elevation={0}
            sx={{ p: 2, backgroundColor: "transparent", color: "#DDE6ED" }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Our Address
            </Typography>
            <Typography variant="body2">
              Arcadia 604, 6th Floor, South City II, Sector 49, Gurugram,
              Haryana 122018
              <br />
              Phone: 0124-4367729, 9310115620
            </Typography>
            <Button
              variant="contained"
              size="small"
              sx={{
                mt: 2,
                backgroundColor: "#2ecc71",
                fontWeight: "bold",
                color: "#ffffff",
                "&:hover": { backgroundColor: "#27ae60" },
              }}
              onClick={() => {
                navigate("/AppointmentBooking");
                window.scrollTo(0, 0);
              }}
            >
              Book Appointment
            </Button>
          </Paper>
        </Grid>

        {/* Contact Us */}
        <Grid gridColumn={{ xs: "span 12", md: "span 4" }}>
          <Paper
            elevation={0}
            sx={{ p: 2, backgroundColor: "transparent", color: "#DDE6ED" }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">Email:</Typography>
            <Link
              href="mailto:stratumskinclinic@gmail.com"
              underline="hover"
              sx={{ color: "#DDE6ED" }}
            >
              stratumskinclinic@gmail.com
            </Link>

            <Typography variant="body2" mt={2}>
              Phone:
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              <Link
                href="tel:+919310115620"
                underline="hover"
                sx={{ color: "#DDE6ED" }}
              >
                (+91) 9310115620
              </Link>
              <Link
                href="tel:+919711223686"
                underline="hover"
                sx={{ color: "#DDE6ED" }}
              >
                (+91) 9711223686
              </Link>
              <Link
                href="tel:+911244367729"
                underline="hover"
                sx={{ color: "#DDE6ED" }}
              >
                0124-4367729
              </Link>
            </Box>
          </Paper>
        </Grid>

        {/* Follow Us */}
        <Grid gridColumn={{ xs: "span 12", md: "span 4" }}>
          <Paper
            elevation={0}
            sx={{ p: 2, backgroundColor: "transparent", color: "#DDE6ED" }}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Follow Us
            </Typography>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              flexWrap="wrap"
              gap={3}
              pt={1}
            >
              <Link
                href="https://x.com/manishsoni2003"
                target="_blank"
                underline="hover"
                sx={{ color: "#DDE6ED" }}
              >
                <XIcon fontSize="small" />
              </Link>
              <Link
                href="https://www.facebook.com/drmanishsonidermatology/"
                target="_blank"
                underline="hover"
                sx={{ color: "#DDE6ED" }}
              >
                <Facebook fontSize="small" htmlColor="#DDE6ED" />
              </Link>
              <Link
                href="https://www.instagram.com/dr_manishsoni"
                target="_blank"
                underline="hover"
                sx={{ color: "#DDE6ED" }}
              >
                <Instagram fontSize="small" htmlColor="#DDE6ED" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/dr-manish-soni-30846927/"
                target="_blank"
                underline="hover"
                sx={{ color: "#DDE6ED" }}
              >
                <LinkedIn fontSize="small" htmlColor="#DDE6ED" />
              </Link>
              <Link
                href="https://www.youtube.com/c/DrManishSoni"
                target="_blank"
                underline="hover"
                sx={{ color: "#DDE6ED" }}
              >
                <YouTube fontSize="small" htmlColor="#DDE6ED" />
              </Link>
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Google Map */}
      <Box mt={5}>
        <iframe
          title="Stratum Skin Clinic Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.697379394323!2d77.04375211508396!3d28.638654682418193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18b02bb15b07%3A0x545a570dcf354f4c!2sArcadia%2C%20South%20City%20II%2C%20Sector%2049%2C%20Gurugram%2C%20Haryana%20122018!5e0!3m2!1sen!2sin!4v1681380961337!5m2!1sen!2sin"
          width="100%"
          height="180"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>

      <Typography
        variant="caption"
        sx={{ color: "#DDE6ED", mt: 4 }}
        display="block"
        textAlign="center"
      >
        © {new Date().getFullYear()} Stratum Skin & Hair Clinic. All rights
        reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
