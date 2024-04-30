import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { AuthProvider } from "./context/AuthContext"; // Ensure you import AuthProvider correctly
import theme from "./theme";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import DashboardPage from "./components/pages/DashboardPage";
import PrivateRoute from "./components/layout/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      {" "}
      {/* Wrap everything inside AuthProvider */}
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <DashboardPage />
                </PrivateRoute>
              }
            />
            {/* Redirect to login page as the default route */}
            <Route path="/" element={<LoginPage />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
