import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {
  AppBar,
  Box,
  Button,
  FormControlLabel,
  Slider,
  Switch,
  Toolbar,
  Typography,
} from "@mui/material";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const CalculatorForm: React.FC<IProps> = () => {
  const [isDark, setIsDark] = useState<boolean>(false);

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
            <Slider valueLabelDisplay="auto" max={300}/>
            <Typography variant="h6" align="left">
              Enter Weight
            </Typography>
            <Slider valueLabelDisplay="auto" max={200}/>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
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
