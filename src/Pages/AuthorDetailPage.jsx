import { useQuery } from "@apollo/client";
import { Avatar, Container, Grid2, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { GET_AUTHOR_DETAILS_INFO } from "../Graphql/queries";
import CardEl from "../Components/Shared/CardEl";

const AuthorDetailPage = () => {
  const { slug } = useParams();
  const { loading, data } = useQuery(GET_AUTHOR_DETAILS_INFO, {
    variables: { slug },
  });
  if (loading) return <p> loading ...</p>;
  return (
    <>
      <Container maxWidth="lg">
        <Grid2 container mt={10} sx={{ width: "100%" }}>
          <Grid2
            textAlign="center"
            alignItems="center"
            flexDirection="column"
            size={{ xs: 12 }}
          >
            <Avatar
              src={data.authors.cover.url}
              sx={{ height: "200px", width: "200px", m: "auto" }}
            />
            <Typography component="h3" variant="h6" mt={4} fontWeight={700}>
              {data.authors.name}
            </Typography>
            <Typography component="h3" variant="p" mt={2} fontWeight={500}>
              {data.authors.field}
            </Typography>
          </Grid2>
          <Grid2 size={{ xs: 12 }} sx={{ mt: 10 }}>
            <div
              dangerouslySetInnerHTML={{
                __html: data.authors.description.html,
              }}
            ></div>
          </Grid2>
          <Grid2 mt={6} size={{ xs: 12 }}>
            <Typography component="h4" variant="h6" fontWeight={800}>
              مقالات {data.authors.name}
            </Typography>
            <Grid2 container my={5} spacing={3}>
              {data.authors.posts.map((post) => (
                <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
                  <CardEl props={post} />
                </Grid2>
              ))}
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </>
  );
};

export default AuthorDetailPage;
