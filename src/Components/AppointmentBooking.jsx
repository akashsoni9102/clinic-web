import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  Button,
  Typography,
  Container,
  Box,
  TextField,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

const AppointmentBooking = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    category: "",
    mobile: "",
    email: "",
    problemDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (value) => {
    setFormData({ ...formData, mobile: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/send-appointment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        await Swal.fire({
          title: "Appointment Booked!",
          text: "We will reach you shortly.",
          icon: "success",
          confirmButtonText: "OK",
          background: "#DDE6ED",
          didOpen: () => {
            const swal = document.querySelector(".swal2-popup");
            const title = document.querySelector(".swal2-title");
            const confirmButton = document.querySelector(".swal2-confirm");
            const icon = document.querySelector(".swal2-icon.swal2-success");

            if (swal) {
              swal.style.borderRadius = "8px";
            }

            if (title) {
              title.style.color = "#27374D";
              title.style.fontWeight = "bold";
            }

            if (confirmButton) {
              confirmButton.style.backgroundColor = "#27374D";
              confirmButton.style.color = "#ffffff";
              confirmButton.style.border = "none";
              confirmButton.style.padding = "0.6em 1.2em";
              confirmButton.style.borderRadius = "4px";
              confirmButton.style.fontWeight = "bold";
              confirmButton.style.fontSize = "1rem";
              confirmButton.style.cursor = "pointer";
            }

            if (icon) {
              // Apply color to the entire success icon circle
              icon.style.borderColor = "#526D82";
              icon.style.color = "#526D82";
              const circle = icon.querySelector("div.swal2-success-ring");
              const lines = icon.querySelectorAll("span");
              if (circle) circle.style.border = "4px solid #526D82";
              if (lines[0]) lines[0].style.backgroundColor = "#526D82"; // first line
              if (lines[1]) lines[1].style.backgroundColor = "#526D82"; // second line
            }
          },
        });

        setFormData({
          name: "",
          age: "",
          gender: "",
          category: "",
          mobile: "",
          email: "",
          problemDescription: "",
        });
      } else {
        await Swal.fire({
          title: "Booking Failed",
          text: "Please try again later.",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire("An error occurred. Please try again.");
    }
  };

  const fieldStyle = {
    backgroundColor: "#DDE6ED",
    "& .MuiInputBase-root": {
      backgroundColor: "#DDE6ED",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#27374D",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "#27374D",
    },
  };

  const menuItemStyle = {
    backgroundColor: "#DDE6ED",
    color: "#27374D",
  };

  return (
    <Box
      sx={{
        backgroundColor: "#DDE6ED",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: { xs: 2, sm: 3 },
        py: 4,
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: "#DDE6ED",
          boxShadow: 3,
          borderRadius: 2,
          py: 4,
          px: 3,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          textAlign="center"
          sx={{ color: "#27374D" }}
        >
          Book your Appointment
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
            sx={fieldStyle}
          />
          <TextField
            label="Age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            required
            fullWidth
            sx={fieldStyle}
          />
          <TextField
            select
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            fullWidth
            sx={fieldStyle}
          >
            <MenuItem value="Male" sx={menuItemStyle}>
              Male
            </MenuItem>
            <MenuItem value="Female" sx={menuItemStyle}>
              Female
            </MenuItem>
            <MenuItem value="Others" sx={menuItemStyle}>
              Others
            </MenuItem>
          </TextField>
          <TextField
            select
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            fullWidth
            sx={fieldStyle}
          >
            <MenuItem value="Skin Issue" sx={menuItemStyle}>
              Skin Issue
            </MenuItem>
            <MenuItem value="Fungal Issue" sx={menuItemStyle}>
              Fungal Issue
            </MenuItem>
            <MenuItem value="Hair Issue" sx={menuItemStyle}>
              Hair Issue
            </MenuItem>
          </TextField>

          <Box
            sx={{
              border: "1px solid rgba(0, 0, 0, 0.23)",
              borderRadius: "4px",
              backgroundColor: "#DDE6ED",
              height: "56px",
              display: "flex",
              alignItems: "center",
              px: 1,
              "&:focus-within": {
                borderColor: "#27374D",
              },
              "& .react-tel-input .form-control:focus": {
                outline: "none !important",
                boxShadow: "none !important",
                border: "none !important",
              },
            }}
          >
            <PhoneInput
              country={"in"}
              value={formData.mobile}
              onChange={handlePhoneChange}
              inputStyle={{
                border: "none",
                backgroundColor: "#DDE6ED",
                width: "100%",
                height: "100%",
                outline: "none",
                boxShadow: "none",
              }}
              buttonStyle={{
                border: "none",
                backgroundColor: "#DDE6ED",
              }}
              containerStyle={{
                width: "100%",
              }}
              required
            />
          </Box>

          <TextField
            label="Email (Optional)"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            sx={fieldStyle}
          />
          <TextField
            label="Problem Description (Optional)"
            name="problemDescription"
            value={formData.problemDescription}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            sx={fieldStyle}
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            sx={{
              backgroundColor: "#27374D",
              color: "#fff",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: "#1c2a3a",
              },
            }}
          >
            Book Appointment
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AppointmentBooking;
