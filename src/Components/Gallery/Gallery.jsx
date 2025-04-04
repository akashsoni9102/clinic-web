import React, { useState } from "react";
import {
  Card,
  CardMedia,
  Typography,
  Dialog,
  DialogContent,
} from "@mui/material";
import { Grid } from "@mui/system"; // ✅ This is the correct Grid for v2 layout

import photo1 from "./GalleryAssets/photo1.jpg";
import photo2 from "./GalleryAssets/photo2.jpg";
import photo3 from "./GalleryAssets/photo3.jpg";
import photo4 from "./GalleryAssets/photo4.jpg";
import photo5 from "./GalleryAssets/photo5.jpg";
import photo6 from "./GalleryAssets/photo6.jpg";
import photo7 from "./GalleryAssets/photo7.jpg";
import photo8 from "./GalleryAssets/photo8.jpg";

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
      <Typography
        variant="h4"
        gutterBottom
        align="center"
        style={{ color: "#4A90E2" }}
      >
        Our Gallery
      </Typography>

      <Grid container columns={12} spacing={2}>
        {images.map((image) => (
          <Grid key={image.id} columnspan={{ xs: 6, sm: 3 }}>
            <Card
              onClick={() => handleOpen(image.url)}
              style={{ cursor: "pointer" }}
            >
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
