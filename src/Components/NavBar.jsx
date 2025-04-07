import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import ContactsIcon from "@mui/icons-material/Contacts";
import ArticleIcon from "@mui/icons-material/Article";

import navimage from "../assets/nav-logo.png";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { label: "Home", path: "/", icon: <HomeIcon /> },
    { label: "About Us", path: "/about", icon: <InfoIcon /> },
    { label: "Our Services", path: "/services", icon: <DesignServicesIcon /> },
    { label: "Gallery", path: "/gallery", icon: <PhotoLibraryIcon /> },
    { label: "Contact Us", path: "/contact", icon: <ContactsIcon /> },
    { label: "Blogs", path: "/blog", icon: <ArticleIcon /> },
  ];

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#DDE6ED" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 2 }}>
          <Typography variant="h6" color="primary" sx={{ flexShrink: 0 }}>
            <img
              src={navimage}
              alt="Logo"
              onClick={() => navigate("/")}
              style={{
                cursor: "pointer",
                width: "150px",
                height: "auto",
                objectFit: "contain",
              }}
            />
          </Typography>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              overflowX: "auto",
              gap: 1,
              ml: 2,
            }}
          >
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  startIcon={item.icon}
                  sx={{
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                    color: isActive ? "#ffffff" : "#526D82",
                    backgroundColor: isActive ? "#526D82" : "transparent",
                    px: 1.5,
                    py: 1,
                    minWidth: 0,
                    "&:hover": {
                      color: "#ffffff",
                      backgroundColor: "#526D82",
                      transition: "all 0.3s ease-in-out",
                    },
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ display: { md: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon sx={{ color: "#526D82" }} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { md: "none" } }}
      >
        <List sx={{ width: 250, backgroundColor: "#DDE6ED", height: "100%" }}>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={handleDrawerToggle}
                sx={{
                  "&:hover": {
                    backgroundColor: "#526D82",
                    "& .MuiListItemText-primary": { color: "#ffffff" },
                    "& .MuiListItemIcon-root": { color: "#ffffff" },
                    transition: "0.3s",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "#526D82" }}>{item.icon}</ListItemIcon>
                <ListItemText
                  primary={item.label}
                  sx={{
                    ".MuiTypography-root": {
                      color: "#526D82",
                      fontWeight: "bold",
                    },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default NavBar;
