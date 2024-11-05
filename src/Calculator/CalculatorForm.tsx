import React, { useCallback, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  AppBar,
  Box,
  Button,
  FormControlLabel,
  Slider,
  Snackbar,
  Switch,
  Toolbar,
  Typography,
  Alert,
} from "@mui/material";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const CalculatorForm: React.FC<IProps> = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false); // State for Snackbar

  const onSubmitClick = useCallback(() => {
    if (weight === 0 || height === 0) {
      // Show the Snackbar when the form is incomplete
      setOpenSnackbar(true);
    } else {
      // Handle valid form submission
      // Example: Calculate BMI or trigger other actions
      setOpenSnackbar(false); // Optionally show Snackbar on valid submission
    }
  }, [weight, height]);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); // Close the Snackbar
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box
        sx={{
          flexGrow: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <AppBar position="static">
          <Toolbar>
            <VolunteerActivismIcon />
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Health Metrics Tracker
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  color="default"
                  checked={isDark}
                  onChange={() => setIsDark((prev) => !prev)}
                />
              }
              label={
                <span style={{ display: "flex", alignItems: "center" }}>
                  {isDark ? (
                    <DarkModeIcon style={{ marginRight: 4 }} />
                  ) : (
                    <LightModeIcon style={{ marginRight: 4 }} />
                  )}
                </span>
              }
            />
          </Toolbar>
        </AppBar>

        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "background.default",
            padding: "2rem",
            minWidth: "500px",
          }}
        >
          <Box
            sx={{
              padding: "2rem",
              borderRadius: "8px",
              backgroundColor: "background.paper", // Dynamically change background color based on theme
              color: "text.primary", // Text color based on theme
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              minWidth: "500px",
              textAlign: "center",
            }}
          >
            <Typography variant="h5" gutterBottom>
              Calculate BMI
            </Typography>
            <Typography variant="h6" align="left">
              Enter Height
            </Typography>
            <Slider
              valueLabelDisplay="auto"
              max={300}
              value={height}
              onChange={(e, value) => setHeight(value as number)}
            />
            <Typography variant="h6" align="left">
              Enter Weight
            </Typography>
            <Slider
              valueLabelDisplay="auto"
              max={200}
              value={weight}
              onChange={(e, value) => setWeight(value as number)}
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={onSubmitClick}
            >
              Submit
            </Button>
          </Box>
        </Box>
        {/* Snackbar for Toast Notification */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="error"
            sx={{ width: "100%" }}
          >
            Please fill in both fields.
          </Alert>
        </Snackbar>
      </Box>
    </ThemeProvider>
  );
};

interface IProps {}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#424242",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f5f5f6",
      paper: "#ffffff",
    },
    text: {
      primary: "#000000",
    },
  },
});

export default CalculatorForm;
