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
const GET_AUTHOR_DETAILS_INFO = gql`
  query {
    authors(where: { slug: "String!" }) {
      cover {
        url
      }
      description {
        text
      }
      name
      posts {
        cover {
          url
        }
        slug
        title
      }
    }
  }
`
export { GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_AUTHOR_DETAILS_INFO }
