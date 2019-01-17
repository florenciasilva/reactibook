import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPost } from '../Actions/postActions';
import { Redirect } from 'react-router-dom'
import { Col, Row, Card, Input, Button} from 'react-materialize';

class AddPost extends Component {
  state = {
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addPost(this.state);
  }
  render() {
    const { auth, profile } = this.props;
    if (!auth.uid) return <Redirect to='/' /> 
    return (
      <Row>
          <Col>
            <Card>
                <textarea placeholder={"What are you thinking about, " + profile.firstName} id="content" onChange={this.handleChange} />
                <Button onClick={this.handleSubmit}>Send</Button>
            </Card>
          </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: (post) => dispatch(addPost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPost)