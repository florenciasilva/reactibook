import React from 'react';
import moment from 'moment';
import { Card, Content, Date, PrimaryBtn, Wrapper, DeleteBtn, Divider } from '../styles';

const AllPosts = (props) => {
    const newestPostFirst = props.posts.reverse()
    return newestPostFirst.map((post, i) => {
        return (
            <>
                <Card key={i}>
                    <Wrapper>
                        <p>{post.user}</p>
                        <Date dateTime={post.createdAt}>{moment(post.createdAt).calendar()}</Date>
                    </Wrapper>
                    <Content>{post.content}</Content>
                    <Wrapper>
                        <DeleteBtn>Delete</DeleteBtn>
                        <PrimaryBtn>Like</PrimaryBtn>
                    </Wrapper>
                </Card>
                <Divider />
            </>
        );
    });
};

export default AllPosts