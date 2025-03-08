import { Container, Grid2, Typography } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Grid2 container spacing={2} mt={7} mx={7}>
        <Grid2 size={{ xs: 12, md: 3 }}>
          <Typography component="h3" variant="h5" fontWeight="600">
            نویسنده ها
          </Typography>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 9 }}>
          <Typography component="h3" variant="h5" fontWeight="600">
            مقالات
          </Typography>
        </Grid2>
      </Grid2>
    </Container>
  );
};

export default Home;
