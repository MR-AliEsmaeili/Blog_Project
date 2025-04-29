import Loader from "../Components/Shared/Loader"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import { useQuery } from "@apollo/client"
import { Avatar, Box, Container, Grid2, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import { GET_POST_INFO } from "../Graphql/queries"
import CommentForm from "../Components/CommentForm"
import { useState } from "react"

const PostDetailPage = () => {
  const [formState, setFormState] = useState({})
  const { slug } = useParams()
  const navigate = useNavigate()
  const { loading, data } = useQuery(GET_POST_INFO, {
    variables: { slug },
  })
  console.log(formState)
  if (loading) return <Loader />
  // if (error) return <p>error ...</p>
  return (
    <Container maxWidth="lg">
      <Grid2 container>
        <Grid2
          size={{ xs: 12 }}
          display="flex"
          justifyContent="space-between"
          mt={9}
          mx={8}
        >
          <Typography
            component="h4"
            variant="h5"
            color="primary"
            fontWeight={700}
          >
            {data.posts.title}
          </Typography>
          <ArrowBackIcon
            sx={{ cursor: "pointer" }}
            onClick={() => navigate(-1)}
          />
        </Grid2>
        <Grid2 size={{ xs: 12 }} mt={7} display="flex" justifyContent="center">
          <img
            src={data.posts.cover.url}
            width="70%"
            style={{ borderRadius: "15px" }}
          />
        </Grid2>
        <Grid2
          size={{ xs: 12 }}
          display="flex"
          alignItems="center"
          mt={7}
          mx={8}
        >
          <Avatar
            src={data.posts.authors.cover.url}
            sx={{ width: 80, height: 80 }}
          />
          <Box component="div">
            <Typography variant="p" component="p" fontWeight={700} mr={5}>
              {data.posts.authors.name}
            </Typography>
            <Typography
              variant="p"
              component="p"
              fontWeight={700}
              mr={5}
              color="text.secondary"
            >
              {data.posts.authors.field}
            </Typography>
          </Box>
        </Grid2>
        <Grid2 size={{ xs: 12 }} mt={5} mx={8}>
          <div
            dangerouslySetInnerHTML={{ __html: data.posts.decreption.html }}
          ></div>
        </Grid2>
        <Grid2 size={{ xs: 12 }} mt={5} mx={8}>
          <CommentForm
            formState={formState}
            setFormState={setFormState}
            slug={slug}
          />
        </Grid2>
      </Grid2>
    </Container>
  )
}

export default PostDetailPage
