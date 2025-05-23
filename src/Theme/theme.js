import { createTheme } from "@mui/material"

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
    primary: { main: "#9280f7" },
    secondary: { main: "#FDDBBB" },
  },
})

export default theme
