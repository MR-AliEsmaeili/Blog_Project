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
const GET_AUTHORS_INFO = gql`
  query {
    authors_list {
      cover {
        url
      }
      name
      id
      slug
    }
  }
`

export { GET_BLOGS_INFO, GET_AUTHORS_INFO }
