import { Container, Divider, Grid2, Typography } from "@mui/material"
import Blog from "../Components/Blog/Blog"

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Grid2 container spacing={2} mt={7} mx={7}>
        <Grid2 size={{ xs: 12, md: 3 }}>
          <Typography component="h3" variant="h6" fontWeight="600" mb={2}>
            نویسنده ها
          </Typography>
          <Divider variant="inset" />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 9 }}>
          <Typography component="h3" variant="h6" fontWeight="600" mb={2}>
            مقالات
          </Typography>
          <Divider variant="inset" />
          <Blog />
        </Grid2>
      </Grid2>
    </Container>
  )
}

export default Home
