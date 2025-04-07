import React, { useState } from "react";
import Swal from "sweetalert2";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  GlobalStyles,
} from "@mui/material";
import { styled } from "@mui/system";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#27374D",
    },
  },
});

const StyledTextField = styled(TextField)(({ theme }) => ({
  "&:hover .MuiOutlinedInput-root": {
    borderColor: theme?.palette?.primary?.main,
    transition: "border-color 0.3s ease-in-out",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#e0e0e0",
    },
    "&:hover fieldset": {
      borderColor: theme?.palette?.primary?.main,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme?.palette?.primary?.main,
      borderWidth: "2px",
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  padding: "12px 0",
  fontWeight: "bold",
  textTransform: "none",
  borderRadius: "4px",
  transition: "background-color 0.3s ease-in-out, transform 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: "#1e2d3c",
    transform: "scale(1.02)",
  },
}));

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      mobile: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.mobile) {
      Swal.fire("Please enter your contact number.");
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        await Swal.fire({
          title: "Message sent successfully!",
          background: "#DDE6ED",
          icon: "success",
          confirmButtonText: "OK",
          didOpen: () => {
            const popup = document.querySelector(".swal2-popup");
            const title = document.querySelector(".swal2-title");
            const icon = document.querySelector(".swal2-icon.swal2-success");
            const button = document.querySelector(".swal2-confirm");

            if (popup) popup.style.borderRadius = "8px";
            if (title) {
              title.style.color = "#27374D";
              title.style.fontWeight = "bold";
            }
            if (button) {
              button.style.backgroundColor = "#27374D";
              button.style.color = "#fff";
              button.style.border = "none";
              button.style.padding = "0.6em 1.2em";
              button.style.borderRadius = "4px";
              button.style.fontWeight = "bold";
              button.style.fontSize = "1rem";
              button.style.cursor = "pointer";
            }
            if (icon) {
              icon.style.borderColor = "#526D82";
              icon.style.color = "#526D82";
              const ring = icon.querySelector("div.swal2-success-ring");
              const lines = icon.querySelectorAll("span");
              if (ring) ring.style.border = "4px solid #526D82";
              if (lines[0]) lines[0].style.backgroundColor = "#526D82";
              if (lines[1]) lines[1].style.backgroundColor = "#526D82";
            }
          },
        });

        setFormData({
          firstName: "",
          lastName: "",
          mobile: "",
          email: "",
          message: "",
        });
      } else {
        Swal.fire("Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire("An error occurred. Please try again.");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      {/* Custom style for bold focus border on phone input */}
      <GlobalStyles
        styles={{
          ".custom-phone-input:focus": {
            borderColor: "#27374D !important",
            borderWidth: "2px !important",
            boxShadow: "none !important",
            outline: "none !important",
          },
        }}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          background: "#DDE6ED",
          padding: { xs: "10px", sm: "20px" },
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: { xs: "100%", sm: "500px" },
            maxWidth: "500px",
            padding: { xs: "20px", sm: "30px" },
            borderRadius: "8px",
            backgroundColor: "#DDE6ED",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              marginBottom: "10px",
              textAlign: "center",
              color: "#27374D",
            }}
          >
            Enquiry Form
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: "#526D82",
              marginBottom: "20px",
              textAlign: "center",
            }}
          >
            Tell us a bit about yourself, and we’ll get in touch soon.
          </Typography>

          <form onSubmit={handleSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <StyledTextField
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
              />

              <StyledTextField
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                variant="outlined"
                fullWidth
                required
              />

              <PhoneInput
                country={"in"}
                value={formData.mobile}
                onChange={handlePhoneChange}
                placeholder=""
                inputProps={{
                  name: "contactNumber",
                  required: true,
                }}
                inputClass="custom-phone-input"
                containerStyle={{ width: "100%" }}
                inputStyle={{
                  width: "100%",
                  height: "56px",
                  borderRadius: "4px",
                  border: "1px solid #e0e0e0",
                  fontSize: "16px",
                  paddingLeft: "50px",
                  backgroundColor: "#DDE6ED",
                  color: "#27374D",
                }}
                buttonStyle={{
                  borderRight: "1px solid #ccc",
                }}
              />

              <StyledTextField
                label="Email (Optional)"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                fullWidth
              />

              <StyledTextField
                label="Message (Optional)"
                name="message"
                value={formData.message}
                onChange={handleChange}
                variant="outlined"
                multiline
                rows={4}
                fullWidth
              />

              <StyledButton type="submit" fullWidth>
                Send Message
              </StyledButton>
            </Box>
          </form>
        </Paper>
      </Box>
    </ThemeProvider>
  );
};

export default ContactForm;
