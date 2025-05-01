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
const GET_POST_INFO = gql`
  query getPost($slug: String!) {
    posts(where: { slug: $slug }) {
      authors {
        cover {
          url
        }
        field
        name
      }
      title
      decreption {
        html
      }
      cover {
        url
      }
    }
  }
`


const GET_POST_COMMENTS = gql`
query getComments($slug: String!) {
  posts(where: {slug: $slug}) {
    comments {
      comment
      name
      id
    }
  }
}
`

export {
  GET_BLOGS_INFO,
  GET_AUTHORS_INFO,
  GET_AUTHOR_DETAILS_INFO,
  GET_POST_INFO,
  GET_POST_COMMENTS,
}
