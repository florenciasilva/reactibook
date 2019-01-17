import React from 'react';
import Posts from './Posts';

const PostContainer = ({ posts, auth, profile }) => {
  return (
    <div>
      { posts && posts.map(posts => {
        return (
          <Posts post={posts} key={posts.id} auth={auth} profile={profile}/>
        );
      })}  
    </div>
  );
};

export default PostContainer;