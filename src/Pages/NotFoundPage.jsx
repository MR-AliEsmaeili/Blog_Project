import { Container, Grid2 } from "@mui/material"
import notFound from "../Assets/not-found.gif"
const NotFoundPage = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid2 Container>
          <Grid2 size={{ xs: 12 }}>
            <img src={notFound} />
          </Grid2>
        </Grid2>
      </Container>
    </>
  )
}

export default NotFoundPage
