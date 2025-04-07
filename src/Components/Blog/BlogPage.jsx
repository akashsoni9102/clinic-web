import React, { useState } from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import blog1 from "./blogAssets/blog1.jpg";
import blog2 from "./blogAssets/blog2.jpg";
import blog3 from "./blogAssets/blog3.jpg";
import blog4 from "./blogAssets/blog4.jpg";
import blog5 from "./blogAssets/blog5.webp";
import blog6 from "./blogAssets/blog6.webp";
import blog7 from "./blogAssets/blog7.jpg";
import blog8 from "./blogAssets/blog8.jpg";
import blog9 from "./blogAssets/blog9.jpg";

const BlogContainer = styled("div")(({ theme }) => ({
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
  marginBottom: "60px", // Increased spacing below heading
  fontSize: "2.5rem",
  fontWeight: "bold",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.8rem",
    marginBottom: "40px",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.5rem",
    marginBottom: "30px",
  },
}));

const Subtitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: "#27374D",
  marginBottom: "40px",
  fontSize: "1rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem",
    marginBottom: "20px",
  },
}));

const BlogCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: "0 auto 20px",
  backgroundColor: "#DDE6ED",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
  },
}));

const BlogImage = styled("div")({
  height: 200,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
});

const ReadMoreButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#27374D",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#1b2533",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
    padding: "4px 8px",
  },
}));

const LoadMoreButton = styled(Button)(({ theme }) => ({
  display: "block",
  margin: "20px auto",
  backgroundColor: "#27374D", // Updated to match your color
  color: "#fff",
  "&:hover": {
    backgroundColor: "#1b2533",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.9rem",
    padding: "6px 12px",
  },
}));

const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Healthy, Glowing Skin",
    date: "May 31, 2020 | Dr. Manish Soni",
    image: blog1,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    title: "How to Prevent and Treat Acne Effectively",
    date: "May 31, 2020 | Dr. Manish Soni",
    image: blog2,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "The Best Anti-Aging Skincare Routine for All Skin Types",
    date: "May 31, 2020 | Dr. Manish Soni",
    image: blog3,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 4,
    title: "Common Skin Conditions and How to Manage Them",
    date: "May 31, 2020 | Dr. Manish Soni",
    image: blog4,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 5,
    title: "The Importance of Sunscreen: Protecting Your Skin from Damage",
    date: "May 31, 2020 | Dr. Manish Soni",
    image: blog5,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 6,
    title: "Winter vs. Summer Skincare: What You Need to Know",
    date: "May 31, 2020 | Dr. Manish Soni",
    image: blog6,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 7,
    title: "How to Identify and Treat Different Types of Rashes",
    date: "May 31, 2020 | Dr. Manish Soni",
    image: blog7,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 8,
    title: "Myth vs. Fact: Debunking Skincare Misconceptions",
    date: "May 31, 2020 | Dr. Manish Soni",
    image: blog8,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 9,
    title: "Best Dermatologist-Approved Products for Sensitive Skin",
    date: "May 31, 2020 | Dr. Manish Soni",
    image: blog9,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 10,
    title: "Skincare Tips for Beginners",
    date: "June 15, 2020 | Dr. Manish Soni",
    image: blog1,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 11,
    title: "Understanding Your Skin Type",
    date: "June 20, 2020 | Dr. Manish Soni",
    image: blog2,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 12,
    title: "DIY Skincare Recipes for Glowing Skin",
    date: "June 25, 2020 | Dr. Manish Soni",
    image: blog3,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean incididunt ut labore et dolore magna aliqua.",
  },
];

const BlogPage = () => {
  const navigate = useNavigate();
  const [visiblePosts, setVisiblePosts] = useState(9);

  const handleReadMore = (id) => {
    navigate(`/post/${id}`);
    window.scrollTo(0, 0);
  };

  const handleLoadMore = () => {
    setVisiblePosts((prev) => prev + 3);
  };

  return (
    <BlogContainer>
      <Title variant="h3">Blogs</Title>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        display="flex"
        flexWrap="wrap"
      >
        {blogPosts.slice(0, visiblePosts).map((post) => (
          <Grid
            key={post.id}
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
            <BlogCard>
              <BlogImage style={{ backgroundImage: `url(${post.image})` }} />
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ color: "#27374D", fontWeight: "bold" }}
                >
                  {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {post.date}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {post.content}
                </Typography>
                <ReadMoreButton
                  variant="contained"
                  size="small"
                  onClick={() => handleReadMore(post.id)}
                  sx={{ mt: 2 }}
                >
                  Read More
                </ReadMoreButton>
              </CardContent>
            </BlogCard>
          </Grid>
        ))}
      </Grid>

      {visiblePosts < blogPosts.length && (
        <LoadMoreButton variant="contained" onClick={handleLoadMore}>
          Load More
        </LoadMoreButton>
      )}
    </BlogContainer>
  );
};

export default BlogPage;
