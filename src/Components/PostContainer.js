import React from 'react'
import Posts from './Posts'

const PostContainer = ({posts}) => {
  return (
    <div>
      { posts && posts.map(posts => {
        return (
          <Posts post={posts} key={posts.id} />
        )
      })}  
    </div>
  )
}

export default PostContainer