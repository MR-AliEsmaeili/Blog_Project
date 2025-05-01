import { useQuery } from "@apollo/client";
import { GET_AUTHORS_INFO } from "../../Graphql/queries";
import { Avatar, Divider, Grid2, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Loader from "../Shared/Loader";

const Authors = () => {
  const { loading, data } = useQuery(GET_AUTHORS_INFO);
  if (loading) return <Loader />;
  if (!data) return <p>data fething error</p>;
  return (
    <Grid2
      container
      sx={{
        border: "1px solid rgba(144, 144, 144, 0.3)",
        boxShadow: "2px 7px 15px -1px rgba(56,56,56,0.3)",
        borderRadius: 4,
      }}
      mt={4}
    >
      <Grid2 size={{ xs: 12 }}>
        {data.authors_list.map((author, index) => (
          <div key={index}>
            <Link
              to={`/author/${author.slug}`}
              style={{
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Grid2
                container
                alignItems="center"
                sx={{
                  p: 1,
                  transition: "background-color 0.4لs ease",
                  "&:hover": {
                    backgroundColor: "#e1e1e1",
                    borderRadius: 4,
                    borderRight: "4px solid #9280F780",
                  },
                }}
              >
                <Grid2 ml={2}>
                  <Avatar src={author.cover.url} />
                </Grid2>
                <Grid2>
                  <Typography component="p" variant="p" fontSize={12}>
                    {author.name}
                  </Typography>
                </Grid2>
              </Grid2>
            </Link>
            <Divider variant="middle" />
          </div>
        ))}
      </Grid2>
    </Grid2>
  );
};

export default Authors;
