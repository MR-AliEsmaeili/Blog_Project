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
  query getAuthorInfo($slug: String!) {
    authors(where: { slug: $slug }) {
      cover {
        url
      }
      description {
        html
      }
      name
      posts {
        cover {
          url
        }
        slug
        title
        id
      }
      field
    }
  }
`

export { GET_BLOGS_INFO, GET_AUTHORS_INFO, GET_AUTHOR_DETAILS_INFO }
