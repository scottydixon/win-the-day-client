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
import { useNavigate } from "react-router-dom"; // For redirecting to another route upon successful login
import authApi from "../../api/authApi"; // Adjust the path as necessary

function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send login credentials to the backend
      const response = await authApi.login(formData.email, formData.password);
      console.log("Login successful", response);

      localStorage.setItem("token", response.token);

      navigate("/dashboard"); // Redirect to the dashboard after successful login
    } catch (error) {
      console.error("Login failed", error);
      setError("Invalid email or password");
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={6} sx={{ mt: 8, p: 4 }}>
        <Typography component="h1" variant="h5" align="center">
          Sign In
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
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
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default LoginForm;
