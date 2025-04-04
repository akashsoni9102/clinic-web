import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const EmailTemplate = ({ firstName, lastName, workEmail, message }) => {
  return (
    <Card style={{ maxWidth: 600, margin: "auto", padding: 20, borderRadius: 10, boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          New Contact Form Submission
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Name:</strong> {firstName} {lastName}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Email:</strong> {workEmail}
        </Typography>
        <Typography variant="body1" gutterBottom>
          <strong>Message:</strong>
        </Typography>
        <Typography variant="body2" color="textSecondary" style={{ whiteSpace: "pre-line" }}>
          {message}
        </Typography>
        
        {/* Image Section */}
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <img src="cid:footerImage" alt="Footer" style={{ maxWidth: "100%", height: "auto" }} />
        </div>
        
        {/* Copyright Section */}
        <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: 10 }}>
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EmailTemplate;
