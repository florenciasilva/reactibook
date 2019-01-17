import React, { Component } from 'react';
import Notifications from './Notifications';
import PostContainer from './PostContainer';
import { Row, Col } from 'react-materialize';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import AddPost from './AddPost';

class Feed extends Component {
  render() {
    const { posts, auth } = this.props;
    if (!auth.uid) {return <Redirect to="/" />;} 

    return (
      <div>
        <Row>
          <Col s={12} m={10}>
            <AddPost />
            <PostContainer posts={posts} auth={auth}/>
          </Col>
          <Col s={12} m={2}>
            <Notifications />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.firestore.ordered.posts,
    auth: state.firebase.auth,
  };
};
  
export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'posts', orderBy: ['createdAt', 'desc'] },
  ])
)(Feed);

