const POST_COMMENT_INFO = `gql
mutation createComment {
  createComments(data: {comment: "sdf", email: "sdf", name: "sfd"}) {
    id
  }
}
`
export { POST_COMMENT_INFO }
