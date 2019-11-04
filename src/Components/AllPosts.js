import React from 'react';

const AllPosts = (props) => {
    return props.posts.map((post, i) => {
        console.log(post)
        return (
            <p key={i}>{post.content}</p>
        )
    })
}

export default AllPosts