import React, { useState } from "react";
import { Grid, Card, CardMedia, Typography, Dialog, DialogContent } from "@mui/material";

import photo1 from "./galleryAssets/photo1.jpg";
import photo2 from "./galleryAssets/photo2.jpg";
import photo3 from "./galleryAssets/photo3.jpg";
import photo4 from "./galleryAssets/photo4.jpg";
import photo5 from "./galleryAssets/photo5.jpg";
import photo6 from "./galleryAssets/photo6.jpg";
import photo7 from "./galleryAssets/photo7.jpg";
import photo8 from "./galleryAssets/photo8.jpg";

const images = [
  { id: 1, url: photo1 },
  { id: 2, url: photo2 },
  { id: 3, url: photo3 },
  { id: 4, url: photo4 },
  { id: 5, url: photo5 },
  { id: 6, url: photo6 },
  { id: 7, url: photo7 },
  { id: 8, url: photo8 },
];

export default function GalleryPage() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h4" gutterBottom align="center" style={{ color: "#4A90E2" }}>
        Our Gallery
      </Typography>
      <Grid container spacing={2}>
        {images.map((image) => (
          <Grid item key={image.id} xs={6} sm={3}>
            <Card onClick={() => handleOpen(image.url)} style={{ cursor: "pointer" }}>
              <CardMedia
                component="img"
                image={image.url}
                alt=""
                style={{ objectFit: "cover", height: 200, width: "100%" }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <DialogContent style={{ padding: 0 }}>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Preview"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}