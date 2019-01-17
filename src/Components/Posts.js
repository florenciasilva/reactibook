import React from 'react';
import moment from 'moment';
import { Row, Col, Card, Button} from 'react-materialize';
import { deletePost } from '../Actions/postActions';
import { connect } from 'react-redux';
import EditPost from './EditPost';

const Post = ({post, auth, dispatch}) => {
  console.log(post, auth);
  if (auth.uid === post.authorId) {
    return (
      <Row>
        <Col>
          <Card>
            <p>{post.authorFirstName} said</p>
            <p>{post.content}</p>
            <p>{moment(post.createdAt.toDate()).calendar()}</p>     
            <EditPost post={post} auth={auth} />  
            <Button onClick={() => {dispatch(deletePost(post.id));}} > Delete</Button>
          </Card>
        </Col>
      </Row>
    );
  } else {
    return (
      <Row>
        <Col>
          <Card>
            <p>{post.authorFirstName} said</p>
            <p>{post.content}</p>
            <p>{moment(post.createdAt.toDate()).calendar()}</p>    
          </Card>
        </Col>
      </Row>
    );
  }
};


export default connect()(Post);