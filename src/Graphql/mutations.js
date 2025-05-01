import { gql } from "@apollo/client"

const POST_COMMENT_INFO = gql`
mutation sendComment(
    $comment:String! ,
    $email:String! ,
    $name:String! , 
    $slug:String!) 
{
  createComments(data: {comment: $comment, email: $email, name: $name, posts: {connect:  {slug:$slug}}}) {
    id
  }
}
`
export { POST_COMMENT_INFO }
