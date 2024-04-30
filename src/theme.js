import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6", // Example color
    },
    secondary: {
      main: "#19857b", // Example color
    },
    error: {
      main: "#f44336",
    },
    background: {
      default: "#fff",
      paper: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

export default theme;
