// import React, { Component } from 'react';
// import {Modal, Button} from 'react-materialize';
// import { editPost } from '../Actions/postActions';
// import { connect } from 'react-redux';
// import styled from 'styled-components';


// class EditPost extends Component {
//      state = {
//        id: '',
//        authorFirstName: this.props.post.authorFirstName,
//        authorId: this.props.post.authorId,
//        content: '',
//        createdAt: this.props.post.createdAt,
//        isFriendsWith: this.props.post.isFriendsWith,
//        privacy: this.props.post.privacy,
//      }

//   handleChange = (e) => {
//     this.setState({
//       [e.target.name]: e.target.value,
//       id: e.target.id,
//     });
//   }  

//   handleSubmit = () => {
//     this.props.editPost(this.state);
//   }

//   render() {
//     const { post } = this.props;
//     return (
//       <div>
//         <Modal
//           header="Edit"
//           trigger={<StyledButton>Edit</StyledButton>}>
//           <textarea id={post.id} name="content" onChange={this.handleChange}>{post.content}</textarea>
//           <StyledButton className="modal-close" onClick={this.handleSubmit}>Send</StyledButton>
//         </Modal>       
//       </div>
//     );
//   }
// }

// const StyledButton = styled(Button) `
//   background-color: #78D1C3;
//   &:hover {
//     background-color: #2E615E;
//   }
// `;

// const mapDispatchToProps = dispatch => {
//   return {
//     editPost: (post) => dispatch(editPost(post)),
//   };
// };
  
// export default connect(null, mapDispatchToProps)(EditPost);

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