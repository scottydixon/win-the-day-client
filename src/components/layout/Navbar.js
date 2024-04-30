import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Navbar() {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleMobileMenuClose}>
        <Typography textAlign="center">Login</Typography>
      </MenuItem>
      <MenuItem onClick={handleMobileMenuClose}>
        <Typography textAlign="center">Register</Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Win The Day!
        </Typography>
        {!isMobile ? (
          <div>
            <Button color="inherit" href="/login">
              Login
            </Button>
            <Button color="inherit" href="/register">
              Register
            </Button>
          </div>
        ) : (
          <IconButton
            size="large"
            aria-label="show more"
            aria-controls="mobile-menu"
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
        )}
      </Toolbar>
      {isMobile && mobileMenu}
    </AppBar>
  );
}

export default Navbar;
