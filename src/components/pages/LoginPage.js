import React from "react";
import LoginForm from "../auth/LoginForm";
import { Container, Typography, Box, Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom"; // Use RouterLink for internal navigation

function LoginPage() {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <LoginForm />
        <Link
          component={RouterLink}
          to="/register"
          sx={{ mt: 2, textDecoration: "none" }} // Using sx for styling
        >
          {"Don't have an account? Sign Up"}
        </Link>
      </Box>
    </Container>
  );
}

export default LoginPage;
