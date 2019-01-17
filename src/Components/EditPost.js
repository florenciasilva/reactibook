import React, { Component } from 'react';
import {Modal, Button} from 'react-materialize';
import { editPost } from '../Actions/postActions';
import { connect } from 'react-redux';

class EditPost extends Component {
     state = {
       update: '',
       id: '',
       author: this.props.post.authorFirstName,
       authorId: this.props.post.authorId,
       date: this.props.post.createdAt,
       privacy: this.props.post.privacy,
       isFriendsWith: this.props.post.isFriendsWith,
     }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      id: e.target.id,
    });
  }  

  handleSubmit = () => {
    this.props.editPost(this.state);
  }

  render() {
    const { post } = this.props;
    return (
      <div>
        <Modal
          header="Edit"
          trigger={<Button>Edit</Button>}>
          <textarea id={post.id} name="update" onChange={this.handleChange}>{post.content}</textarea>
          <Button className="modal-close" onClick={this.handleSubmit}>Send</Button>
        </Modal>       
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editPost: (post) => dispatch(editPost(post)),
  };
};

export default connect(null, mapDispatchToProps)(EditPost);