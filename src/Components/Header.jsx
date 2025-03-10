import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material"
import Grid from "@mui/material/Grid2"
import icon from "../Assets/icon.jpg"
import { Link } from "react-router-dom"
const Header = () => {
  return (
    <Box>
      <AppBar
        color="primary"
        position="static"
        sx={{ marginBottom: "20px", padding: "10px" }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Grid
              container
              alignItems="center"
              justifyContent="space-between"
              sx={{ width: "100%" }}
              px={5}
            >
              <Grid>
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  <Typography
                    fontWeight={700}
                    component="h6"
                    variant="h5"
                    color="text"
                  >
                    وبلاگ من
                  </Typography>
                </Link>
              </Grid>

              <Grid>
                <img
                  width="100px"
                  style={{ borderRadius: 15 }}
                  src={icon}
                  alt="icon"
                />
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}

export default Header
