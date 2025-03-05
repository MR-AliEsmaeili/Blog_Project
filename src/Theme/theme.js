import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: `"vazir", "Roboto", "Arial"`,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    fontWeightHeavy: 800,
    fontWeightFat: 900,
  },
  direction: "rtl",
  palette: {
    mode: "light",
    primary: { light: "#89C5D3", dark: "#0C6174", main: "#44A9C0" },
  },
});

export default theme;
