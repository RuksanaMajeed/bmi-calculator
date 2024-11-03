import React, { useState } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppBar, Box, FormControlLabel, Switch, Toolbar } from "@mui/material";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import Typography from "@mui/material/Typography";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const CalculatorForm: React.FC<IProps> = (props) => {
  const [isDark, setIsDark] = useState<boolean>(false);

  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" >
            <Toolbar>
              <VolunteerActivismIcon />
              <Typography variant="h5" component="div" sx={{ flexGrow: 1}}>
              Health Metrics Tracker
              </Typography>
              <FormControlLabel
                control={<Switch color="default"/>}
                onClick={() => setIsDark((prev) => !prev)}
                color="red"
                // label=""
                label={
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                      {isDark ? <DarkModeIcon style={{ marginRight: 4 }} /> : <LightModeIcon style={{ marginRight: 4 }} />}
                    </span>
                  }
              />
                {/* {isDark ? (<DarkModeIcon/>) : (<LightModeIcon/>)} */}
            </Toolbar>
          </AppBar>
        </Box>

        <CssBaseline />
        <main>This app is using the {isDark ? "Dark" : "Light"} mode</main>
      </ThemeProvider>
    </>
  );
};

interface IProps {}
export default CalculatorForm;

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});
