import { useQuery } from "@apollo/client"
import { GET_BLOGS_INFO } from "../../Graphql/queries"
import { Grid2 } from "@mui/material"
import CardEl from "../Shared/CardEl"

const Blog = () => {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO)
  if (loading) return <h5>loading...</h5>
  if (error) return <h5>error...</h5>
  return (
    <Grid2 container spacing={2}>
      {data.posts_list.map((post) => (
        <Grid2 key={post.id} mt={4} size={{ xs: 12, sm: 6, md: 4 }}>
          <CardEl props={post} />
        </Grid2>
      ))}
    </Grid2>
  )
}

export default Blog
