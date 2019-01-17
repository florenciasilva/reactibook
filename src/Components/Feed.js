import React, { Component } from 'react';
import PostContainer from './PostContainer';
import { Row, Col } from 'react-materialize';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import AddPost from './AddPost';
import styled from 'styled-components';

class Feed extends Component {
  render() {
    const { posts, auth, profile } = this.props;
    if (!auth.uid) {return <Redirect to="/" />;} 
    return (
      <StyledRow>
        <Col s={12} m={5}>
          <AddPost />
        </Col>
        <Col s={12} m={7}>
          <PostContainer posts={posts} auth={auth} profile={profile} />
        </Col>
      </StyledRow>
    );
  }
}

const StyledRow = styled(Row) `
  margin-top: 5%
`;

const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};
  
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'posts', orderBy: ['createdAt', 'desc'] },
  ])
)(Feed);

