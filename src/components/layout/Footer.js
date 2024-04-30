import React from "react";
import { Container, Typography, Box, Link } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </Typography>
        <Typography variant="body2" color="text.secondary" align="center">
          <Link color="inherit" href="/privacy">
            Privacy Policy
          </Link>
          {" | "}
          <Link color="inherit" href="/terms">
            Terms of Use
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
