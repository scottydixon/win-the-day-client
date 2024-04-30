import React from "react";
import RegisterForm from "../auth/RegisterForm";
import { Container, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

function RegisterPage() {
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
          Sign Up
        </Typography>
        <RegisterForm />
        <Link to="/login" style={{ marginTop: "20px", textDecoration: "none" }}>
          Already have an account? Sign in
        </Link>
      </Box>
    </Container>
  );
}

export default RegisterPage;
