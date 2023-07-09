import { Box, Drawer, List, ListItem, ListItemText } from "@mui/material";
import React from "react";

const DrawerComponent = ({
  linksList = [],
  isDrawerOpen = false,
  onDrawerToggle,
}) => {
  const handleNavItemClick = (navItemId) => {
    const element = document.getElementById(navItemId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 70;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    onDrawerToggle();
  };

  return (
    <Drawer
      anchor="left"
      open={isDrawerOpen}
      className="drawer"
      onClose={onDrawerToggle}
    >
      <Box className="drawer-wrapper">
        <List className="drawer-nav-list">
          {linksList.map((item, i) => (
            <ListItem key={i} className="drawer-nav-item">
              <ListItemText onClick={() => handleNavItemClick(item.id)}>
                {item.label}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;
