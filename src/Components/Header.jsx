import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import icon from "../Assets/icon.jpg";
const Header = () => {
  return (
    <Box>
      <AppBar
        color="primary"
        position="static"
        sx={{ marginBottom: "20px", padding: "10px" }}
      >
        <Toolbar>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: "100%" }}
            px={5}
          >
            <Grid xs={6}>
              <Typography component="h6" variant="h5" color="white">
                وبلاگ من
              </Typography>
            </Grid>

            <Grid xs={6}>
              <img
                width="100px"
                style={{ borderRadius: "25px" }}
                src={icon}
                alt="icon"
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
