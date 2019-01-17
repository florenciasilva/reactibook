import React from 'react'
import Posts from './Posts'

const PostContainer = ({posts, auth}) => {
  return (
    <div>
      { posts && posts.map(posts => {
        return (
          <Posts post={posts} key={posts.id} auth={auth}/>
        )
      })}  
    </div>
  )
}

export default PostContainer