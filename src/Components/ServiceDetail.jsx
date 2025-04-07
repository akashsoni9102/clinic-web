import React from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Container,
  Box,
  Divider,
} from "@mui/material";
import { styled } from "@mui/system";

import blog1 from "./Blog/blogAssets/blog1.jpg";
import blog2 from "./Blog/blogAssets/blog2.jpg";
import blog3 from "./Blog/blogAssets/blog3.jpg";
import blog4 from "./Blog/blogAssets/blog4.jpg";
import blog5 from "./Blog/blogAssets/blog5.webp";
import blog6 from "./Blog/blogAssets/blog6.webp";
import blog7 from "./Blog/blogAssets/blog7.jpg";
import blog8 from "./Blog/blogAssets/blog8.jpg";
import blog9 from "./Blog/blogAssets/blog9.jpg";

// Styled Components
const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 500,
  margin: "20px auto",
  padding: "16px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)",
  borderRadius: "10px",
  backgroundColor: "#ffffff",
  border: "1px solid #e0e0e0",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-3px)",
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.1)",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "10px",
    padding: "12px",
  },
}));

const Header = styled(Box)(({ theme }) => ({
  backgroundColor: "#e3f2fd",
  color: "#333333",
  padding: "8px",
  textAlign: "center",
  borderRadius: "8px 8px 0 0",
  [theme.breakpoints.down("sm")]: {
    padding: "6px",
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: "#1976d2",
  marginBottom: "12px",
  fontSize: "1.1rem",
  fontWeight: 600,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

const ContentTypography = styled(Typography)(({ theme }) => ({
  color: "#333333",
  fontSize: "0.95rem",
  lineHeight: "1.6",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.875rem",
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 180,
  borderRadius: "8px",
  marginBottom: "16px",
  boxShadow: "0 3px 8px rgba(0, 0, 0, 0.05)",
  [theme.breakpoints.down("sm")]: {
    height: 120,
  },
}));

// Main Component
const ServiceDetail = () => {
  const { id } = useParams();

  const services = {
    1: {
      title: "The Ultimate Guide to Healthy, Glowing Skin",
      content:
        "This guide offers practical tips for achieving healthy, glowing skin. Learn about daily skincare routines, hydration, and natural remedies to enhance your complexion, suitable for beginners and enthusiasts alike.",
      image: blog1,
    },
    2: {
      title: "How to Prevent and Treat Acne Effectively",
      content:
        "Explore effective strategies for acne prevention and treatment, including cleansing techniques, dietary adjustments, and recommended products for clear skin.",
      image: blog2,
    },
    3: {
      title: "The Best Anti-Aging Skincare Routine for All Skin Types",
      content:
        "Discover a tailored anti-aging routine with key ingredients and application methods to maintain youthful skin across all skin types.",
      image: blog3,
    },
    4: {
      title: "Common Skin Conditions and How to Manage Them",
      content:
        "Learn to identify and manage common skin conditions like eczema and psoriasis with practical advice and treatment options.",
      image: blog4,
    },
    5: {
      title: "The Importance of Sunscreen: Protecting Your Skin from Damage",
      content:
        "Understand why sunscreen is crucial for skin protection and how to select the right product for daily use.",
      image: blog5,
    },
    6: {
      title: "Winter vs. Summer Skincare: What You Need to Know",
      content:
        "Adjust your skincare routine for winter and summer to keep your skin healthy and balanced throughout the year.",
      image: blog6,
    },
    7: {
      title: "How to Identify and Treat Different Types of Rashes",
      content:
        "Gain insights on recognizing and treating various rashes with home remedies and professional guidance.",
      image: blog7,
    },
    8: {
      title: "Myth vs. Fact: Debunking Skincare Misconceptions",
      content:
        "Separate skincare myths from facts to build a more informed and effective skincare routine.",
      image: blog8,
    },
    9: {
      title: "Best Dermatologist-Approved Products for Sensitive Skin",
      content:
        "Explore top dermatologist-recommended products designed to care for sensitive skin types.",
      image: blog9,
    },
  };

  const service = services[+id];

  if (!service)
    return <Typography align="center">Post not found</Typography>;

  return (
    <Container>
      <StyledCard>
        <Header>
          <Typography variant="h6" component="h1">
            {service.title}
          </Typography>
        </Header>
        <CardContent>
          <StyledCardMedia
            component="img"
            image={service.image}
            alt={service.title}
          />
          <Divider sx={{ my: 1.5, borderColor: "#90caf9" }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1.5,
            }}
          >
            <StyledTypography variant="subtitle1">Post Details</StyledTypography>
            <Typography variant="caption" color="textSecondary">
              Posted on April 03, 2025 | Dr. Manish Soni
            </Typography>
          </Box>
          <ContentTypography variant="body2" paragraph>
            {service.content}
          </ContentTypography>
        </CardContent>
      </StyledCard>
    </Container>
  );
};

export default ServiceDetail;
