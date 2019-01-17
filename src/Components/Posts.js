import React from 'react';
import moment from 'moment';
import { Card, Button } from 'react-materialize';
import { deletePost } from '../Actions/postActions';
import { connect } from 'react-redux';
import EditPost from './EditPost';
import styled from 'styled-components';

const Post = ({ post, auth, dispatch }) => {
  if (auth.uid === post.authorId) {
    return (
      <Card>
        <StyledAuthor>{post.authorFirstName} said</StyledAuthor>
        <StyledContent>{post.content}</StyledContent>
        <StyledDate>
          {moment(post.createdAt.toDate()).calendar()}
        </StyledDate>
        <StyledBtnContainer>
          <EditPost post={post} auth={auth} />  
          <StyledButton onClick={() => {
            const confirmDeletion = window.confirm(
              'Are you sure you want to delete this post?'
            );
            if (confirmDeletion === true) {
              dispatch(deletePost(post.id));
            }
          }} > Delete</StyledButton>
        </StyledBtnContainer>     
      </Card>
    );
  } else if ( post.privacy === 'public' || 
  auth.uid === post.isFriendsWith ) {
    return (
      <Card>
        <StyledAuthor>{post.authorFirstName} said</StyledAuthor>
        <StyledContent>{post.content}</StyledContent>
        <StyledDate>
          {moment(post.createdAt.toDate()).calendar()}
        </StyledDate>    
      </Card>
    );
  } else {
    return null;
  }
};

const StyledAuthor = styled.p `
  font-size: 1rem;
`;

const StyledContent = styled.p `
  font-size: 1rem;
  text-align: center;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 
              0 1px 5px 0 rgba(0,0,0,0.12), 
              0 3px 1px -2px rgba(0,0,0,0.2);
  padding: 2rem;
  margin-top: 1rem; 
`;
const StyledDate = styled.p `
  font-size: 0.8rem;
  text-align: right;
  margin-top: 0.5rem;
`;

const StyledBtnContainer = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 1rem;
`;
const StyledButton = styled(Button) `
  margin-left: 2rem;
  background-color: #bc3e2b;

  &:hover {
    background-color: #93483c;
  }
`;

export default connect()(Post);
