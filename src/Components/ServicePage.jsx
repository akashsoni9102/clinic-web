// src/pages/ServicePage.js

import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Card, CardMedia, CardContent, Typography, Grid, Button } from "@mui/material";
import { services } from "../data/servicesData";

const ServicePage = () => {
  const navigate = useNavigate();

  const handleReadMore = (id) => {
    navigate(`/serviceDetail/${id}`);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Our Services</Typography>
      <Grid container spacing={4}>
        {services.map((service) => (
          <Grid item xs={12} sm={6} md={4} key={service.id}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={service.image}
                alt={service.title}
              />
              <CardContent>
                <Typography variant="h6">{service.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ my: 1 }}>
                  {service.content.substring(0, 100)}...
                </Typography>
                <Button onClick={() => handleReadMore(service.id)}>Read More</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServicePage;
