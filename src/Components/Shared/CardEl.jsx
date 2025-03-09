import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material"
import { Link } from "react-router-dom"

const CardEl = ({ props: { authors, cover, title, slug } }) => {
  return (
    <>
      <Card
        sx={{
          border: "1px solid rgba(144, 144, 144, 0.3)",
          boxShadow: "2px 7px 15px -1px rgba(56,56,56,0.3)",
          borderRadius: 4,
        }}
      >
        <CardHeader
          avatar={<Avatar src={authors.cover.url} />}
          title={
            <Typography
              component="p"
              variant="p"
              color="text.primary"
              fontWeight={700}
              mr={2}
            >
              {authors.name}
            </Typography>
          }
        />
        <CardMedia component="img" height="194" image={cover.url} alt={title} />
        <CardContent sx={{ height: 80 }}>
          <Typography
            component="p"
            variant="p"
            fontWeight={500}
            color="text.primary"
          >
            {title}
          </Typography>
        </CardContent>
        <Divider variant="middle" sx={{ mb: 1 }} />
        <CardActions>
          <Link
            to={`/blog/${slug}`}
            style={{
              width: "100%",
              textDecoration: "none",
            }}
          >
            <Button
              variant="outlined"
              size="small"
              sx={{
                width: "100%",
                color: "black",
                borderRadius: 3,
              }}
            >
              مطالعه کن
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  )
}

export default CardEl
