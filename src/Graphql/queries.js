import { gql } from "@apollo/client"
const GET_BLOGS_INFO = gql`
  query {
    posts_list {
      authors {
        cover {
          url
        }
        name
      }
      cover {
        url
      }
      slug
      title
      decreption {
        text
      }
      id
    }
  }
`
export { GET_BLOGS_INFO }
