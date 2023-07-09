import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "../Navbar/Navbar";
import Decorator from "../common/Decorator";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import DrawerComponent from "../DrawerComponent/DrawerComponent";
import ReactTyped from "react-typed";

export default function Headers() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    {
      label: "About",
      id: "About",
    },
    {
      label: "Events",
      id: "Events",
    },
    {
      label: "Contact",
      id: "Contact",
    },
  ];

  return (
    <Box className="headerWrapper" id="Header">
      <Navbar navLinksList={navLinks} handleToggle={handleToggle} />
      <DrawerComponent
        linksList={navLinks}
        isDrawerOpen={isOpen}
        onDrawerToggle={handleToggle}
      />
      <Box className="header-container">
        <Typography variant="h3" className="header-title">
          Global Seerah Forum
        </Typography>
        <Typography variant="h4" className="header-description">
          <ReactTyped
            strings={["Come to Uswa E Hasna"]}
            typeSpeed={70}
            backSpeed={80}
            loop
          />
        </Typography>
        <Decorator
          label="About Us"
          withIcon={true}
          icon={<ArrowDownwardRoundedIcon />}
        />
      </Box>
    </Box>
  );
}
