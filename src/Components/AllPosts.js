import React from 'react';
import moment from 'moment';

const AllPosts = (props) => {
    return props.posts.map((post, i) => {
        console.log(post)
        return (
            <div key={i}>
                <p>{post.content}</p>
                <time dateTime={post.createdAt}>{moment(post.createdAt).calendar()}</time>
            </div>
        )
    })
}

export default AllPosts