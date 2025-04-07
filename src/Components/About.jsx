import React from "react";
import { Container, Box, Typography } from "@mui/material";
import aboutimg1 from "../assets/about-1.jpg";
import aboutimg2 from "../assets/about-2.jpg";
import goldmedalimg from "../assets/gold-medal.jpeg";

const About = () => {
  return (
    <Box sx={{ backgroundColor: "#DDE6ED", py: 5 }}>
      <Container maxWidth="xl">
        {/* Heading */}
        <Typography
          variant="h3"
          gutterBottom
          textAlign="center"
          sx={{ mb: 4, color: "#27374D", fontWeight: "bold" }}
        >
          About Us
        </Typography>

        {/* First Card */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            backgroundColor: "#DDE6ED",
            borderRadius: 3,
            boxShadow: 4,
            mb: 5,
            p: 3,
          }}
        >
          {/* Text Section */}
          <Box
            sx={{
              flex: 2,
              pr: { xs: 0, md: 3 },
              textAlign: { xs: "center", md: "left" },
              mb: { xs: 3, md: 0 },
            }}
          >
            <Typography variant="body1" sx={{ textAlign: "justify", mx: 2 }}>
              Dr. Manish Soni is a Dermatologist who has done MBBS,{" "}
              <b>MD (Gold Medalist) in Dermatology</b>. Later he pursued IADVL
              Fellowship from prestigious <b>‘AIIMS, New Delhi’</b>. He's been{" "}
              <b>awarded Gold Medal twice</b>. His work in Dermatology is
              published in reputed National and International journals. Presented
              papers at many national and International conferences. Having{" "}
              <b>
                experience of 15 years with ethical and best in class methods of
                treatment
              </b>
              . Accurate diagnosis, specific treatment related to illness and
              empathetic behaviour towards his patients. Dr. Manish Soni stands as
              the <b>best Dermatologist in Gurgaon</b>. Stratum skin & hair clinic
              is one of the best hair transplant, skin clinic in Gurugram,
              aesthetic centre, providing a wide range of skin care services.
            </Typography>
          </Box>

          {/* Image Section */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={goldmedalimg}
              alt="About Dr. Manish"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                maxWidth: "400px",
              }}
            />
          </Box>
        </Box>

        {/* Second Card */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            backgroundColor: "#DDE6ED",
            borderRadius: 3,
            boxShadow: 4,
            p: 3,
          }}
        >
          {/* Image Section */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              pr: { xs: 0, md: 3 },
              mb: { xs: 3, md: 0 },
            }}
          >
            <img
              src={aboutimg2}
              alt="Company Vision"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "10px",
                maxWidth: "400px",
              }}
            />
          </Box>

          {/* Text Section */}
          <Box
            sx={{
              flex: 2,
              textAlign: { xs: "center", md: "left" },
              pl: { xs: 0, md: 3 },
            }}
          >
            <Typography variant="body1" sx={{ textAlign: "justify", mx: 2 }}>
              Dr. Manish Soni is one of the most talented and promising
              dermatologists in India. At a young age, he achieved professional
              milestones through dedication and continuous learning in dermatology
              and cosmetology. He was awarded a Gold Medal for being the best
              young dermatologist during his MD. Known for accurate diagnosis and
              precise treatments, Dr. Manish Soni gives equal attention to all—be
              it a minor allergy or advanced hair transplant case. Patients admire
              his results and share their experiences on Google, Facebook, and
              YouTube. He refers to them as 'patients,' not 'clients.' His
              expertise and ethics make him a world-class dermatologist in
              Gurgaon.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
