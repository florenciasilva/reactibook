import React from 'react'
import moment from 'moment';

const Post = ({post}) => {
  console.log(post.createdAt)
  return (
    <div>
        <p>{post.authorFirstName} said:</p>
        <p>{post.content}</p>
        <p>{moment(post.createdAt.toDate()).calendar()}</p>        
    </div>
  )
}

export default Post