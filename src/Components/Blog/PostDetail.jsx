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
import blog1 from "./blogAssets/blog1.jpg";
import blog2 from "./blogAssets/blog2.jpg";
import blog3 from "./blogAssets/blog3.jpg";
import blog4 from "./blogAssets/blog4.jpg";
import blog5 from "./blogAssets/blog5.webp";
import blog6 from "./blogAssets/blog6.webp";
import blog7 from "./blogAssets/blog7.jpg";
import blog8 from "./blogAssets/blog8.jpg";
import blog9 from "./blogAssets/blog9.jpg";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 800,
  margin: "30px auto",
  padding: "25px",
  boxShadow: "0 6px 18px rgba(0, 0, 0, 0.08)", // Subtle shadow
  borderRadius: "12px",
  backgroundColor: "#fafafa", // Light grayish background for sobriety
  border: "1px solid #e0e0e0", // Soft gray border
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-4px)", // Gentle lift
    boxShadow: "0 10px 24px rgba(0, 0, 0, 0.12)", // Slightly enhanced shadow
  },
  [theme.breakpoints.down("sm")]: {
    margin: "15px",
    padding: "15px",
  },
}));

const Header = styled(Box)(({ theme }) => ({
  backgroundColor: "#bbdefb", // Light blue background
  color: "#333333", // Darker text for contrast on light bg
  padding: "10px", // Reduced padding to make title box smaller
  textAlign: "center",
  borderRadius: "8px 8px 0 0",
  [theme.breakpoints.down("sm")]: {
    padding: "8px",
  },
}));

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: "#4a90e2", // Softer blue for text
  marginBottom: "15px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.3rem",
  },
}));

const ContentTypography = styled(Typography)(({ theme }) => ({
  color: "#333333", // Darker gray for readability
  lineHeight: "1.7",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem",
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 250, // Reduced from 350 to 250px
  borderRadius: "8px",
  marginBottom: "20px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.06)", // Subtle shadow
  [theme.breakpoints.down("sm")]: {
    height: 150, // Reduced from 200 to 150px for mobile
  },
}));

const PostDetail = () => {
  const { id } = useParams();

  const post = {
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
  }[id];

  if (!post) return <Typography>Post not found</Typography>;

  return (
    <Container>
      <StyledCard>
        <Header>
          <Typography variant="h5" component="h1">
            {post.title}
          </Typography>
        </Header>
        <CardContent>
          <StyledCardMedia component="img" image={post.image} alt={post.title} />
          <Divider sx={{ my: 2, borderColor: "#4a90e2" }} />
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
            <StyledTypography variant="h6" component="h2">
              Post Details
            </StyledTypography>
            <Typography variant="caption" color="textSecondary">
              Posted on April 03, 2025 | Posted by Dr. Manish Soni
            </Typography>
          </Box>
          <ContentTypography variant="body1" paragraph>
            {post.content}
          </ContentTypography>
        </CardContent>
      </StyledCard>
    </Container>
  );
};

export default PostDetail;