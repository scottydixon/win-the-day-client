import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import to navigate after successful registration
import authApi from "../../api/authApi";

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate(); // Hook to redirect the user

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Sending the formData to the backend via API
      const response = await authApi.registerUser(formData);
      console.log("Registration successful", response);
      // Optionally navigate to login page or dashboard after registration
      navigate("/login"); // Redirect to login after successful registration
    } catch (error) {
      console.error("Registration failed", error);
      // Here, you might want to handle errors, e.g., showing an error message to the user
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={6} sx={{ mt: 8, p: 4 }}>
        <Typography component="h1" variant="h5" align="center">
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Full Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default RegisterForm;
