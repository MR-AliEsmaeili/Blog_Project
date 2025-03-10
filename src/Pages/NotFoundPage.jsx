import { Avatar, Button, Container, Grid2, Typography } from "@mui/material"
import notFound from "../Assets/not-found.gif"
import { Link } from "react-router-dom"
const NotFoundPage = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Grid2 Container textAlign="center" mt={7}>
          <Grid2 size={{ xs: 12 }}>
            <Avatar
              src={notFound}
              sx={{ m: "auto", height: "200px", width: "200px" }}
            />
            <Typography component="p" variant="p" mt={3}>
              صفحه مورد نظر یافت نشد !
            </Typography>
            <Link to="/">
              <Button variant="contained" sx={{ marginTop: 3 }}>
                بازگشت به صفحه اصلی
              </Button>
            </Link>
          </Grid2>
        </Grid2>
      </Container>
    </>
  )
}

export default NotFoundPage
