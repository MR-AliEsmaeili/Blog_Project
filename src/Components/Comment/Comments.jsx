import { useQuery } from "@apollo/client"
import { GET_POST_COMMENTS } from "../../Graphql/queries"
import { Avatar, Box, Grid2, Typography } from "@mui/material"

const Comments = ({ slug }) => {
  const { loading, data } = useQuery(GET_POST_COMMENTS, { variables: { slug } })

  if (loading) return null
  const comments = data?.posts?.comments || []
  return (
    <>
      {comments.length > 0 ? (
        <Grid2
          container
          sx={{
            border: "1px solid rgba(144, 144, 144, 0.3)",
            boxShadow: "2px 7px 15px -1px rgba(56,56,56,0.3)",
            borderRadius: 4,
          }}
        >
          <Grid2 size={{ xs: 12 }} mx={4} my={2}>
            <Typography variant="h6" component="p" fontWeight={700}>
              دیدگاه ها
            </Typography>
          </Grid2>

          {data?.posts?.comments?.map((comment) => (
            <Grid2
              key={comment.id}
              size={{ xs: 12 }}
              m={2}
              p={2}
              border="1px silver solid"
              borderRadius={2}
            >
              <Box
                component="div"
                display="flex"
                alignItems="center"
                gap={2}
                pb={3}
              >
                <Avatar>{comment.name[0]}</Avatar>
                <Typography component="span" variant="p" fontWeight={600}>
                  {comment.name}
                </Typography>
              </Box>
              <Typography component="p" variant="p">
                {comment.comment}
              </Typography>
            </Grid2>
          ))}
        </Grid2>
      ) : (
        <Grid2
          container
          sx={{
            border: "1px solid rgba(144, 144, 144, 0.3)",
            boxShadow: "2px 7px 15px -1px rgba(56,56,56,0.3)",
            borderRadius: 4,
          }}
        >
          <Grid2 size={{ xs: 12 }} mx={4} my={2}>
            <Typography variant="h6" component="p" fontWeight={700}>
              دیدگاهی یافت نشد!{" "}
            </Typography>
          </Grid2>
        </Grid2>
      )}
    </>
  )
}

export default Comments
