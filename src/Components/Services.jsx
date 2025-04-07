import React, { useState } from "react";
import { styled } from "@mui/system";
import { Card, Grid, Typography, CardContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ser1 from "../assets/ser1.jpeg";
import dermatology from "../assets/dermatology.avif";
import hair from "../assets/hair.avif";
import pigmentation from "../assets/pigmentation.avif";
import scars from "../assets/scars.avif";
import laser from "../assets/laser.avif";
import antiaging from "../assets/antiaging.avif";
import medifacials from "../assets/medifacials.avif";
import hairtrans from "../assets/hairtrans.avif";
import cosmic from "../assets/cosmic.avif";

const ServicePosts = [
  { id: 1, image: dermatology, title: "Dermatology" },
  { id: 2, image: hair, title: "Hair" },
  { id: 3, image: pigmentation, title: "Pigmentation" },
  { id: 4, image: scars, title: "Scars" },
  { id: 5, image: laser, title: "Laser" },
  { id: 6, image: antiaging, title: "Antiaging" },
  { id: 7, image: hairtrans, title: "Hair Transplant" },
  { id: 8, image: medifacials, title: "Medifacials" },
  { id: 9, image: cosmic, title: "Cosmic Surgeries" },
];

const ServiceContainer = styled("div")(({ theme }) => ({
  padding: "20px",
  backgroundColor: "#DDE6ED",
  minHeight: "100vh",
  [theme.breakpoints.down("sm")]: {
    padding: "10px",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  color: "#27374D",
  textAlign: "center",
  marginBottom: "20px",
  fontSize: "2.5rem",
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.8rem",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.5rem",
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: "#526D82",
  marginBottom: "40px",
  fontSize: "1rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem",
    marginBottom: "20px",
  },
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: "0 auto 20px",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#DDE6ED",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

const ServiceImage = styled("div")({
  height: 200,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
});

const BoldServiceTitle = styled(Typography)(({ theme }) => ({
  color: "#27374D",
  fontWeight: "bold",
  fontSize: "1.1rem",
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const ReadMoreButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#27374D",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#1a1f2b",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
    padding: "4px 8px",
  },
}));

const LoadMoreButton = styled(Button)(({ theme }) => ({
  display: "block",
  margin: "20px auto",
  backgroundColor: "#27374D",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#1a1f2b",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem",
    padding: "6px 12px",
  },
}));



const ServicePage = () => {
  const navigate = useNavigate();
  const [visiblePosts, setVisiblePosts] = useState(9);

  const handleReadMore = (id) => {
    navigate(`/serviceDetail/${id}`);
    window.scrollTo(0, 0);
  };

  const handleLoadMore = () => {
    setVisiblePosts((prev) => prev + 3);
  };

  return (
    <ServiceContainer>
      <Title variant="h3">Our Services</Title>
      <Subtitle variant="body1">
        Expert dermatologist you can trust, exceptional results at affordable
        prices.
      </Subtitle>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        display="flex"
        flexWrap="wrap"
      >
        {ServicePosts.slice(0, visiblePosts).map((services) => (
          <Grid
            key={services.id}
            sx={{
              flexBasis: {
                xs: "100%",
                sm: "50%",
                md: "33.33%",
                lg: "25%",
              },
              maxWidth: {
                xs: "100%",
                sm: "50%",
                md: "33.33%",
                lg: "25%",
              },
              boxSizing: "border-box",
              padding: "12px",
            }}
          >
            <ServiceCard>
              <ServiceImage
                style={{ backgroundImage: `url(${services.image})` }}
              />
              <CardContent>
                <BoldServiceTitle variant="h6">
                  {services.title}
                </BoldServiceTitle>
                <ReadMoreButton
                  variant="contained"
                  size="small"
                  onClick={() => handleReadMore(services.id)}
                  sx={{ mt: 2 }}
                >
                  Read More
                </ReadMoreButton>
              </CardContent>
            </ServiceCard>
          </Grid>
        ))}
      </Grid>

      {visiblePosts < ServicePosts.length && (
        <LoadMoreButton variant="contained" onClick={handleLoadMore}>
          Load More
        </LoadMoreButton>
      )}
    </ServiceContainer>
  );
};

export default ServicePage;
