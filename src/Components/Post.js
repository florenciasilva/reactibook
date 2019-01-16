import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../Actions/postActions';

class Post extends Component {
    handleClick = () => {
      this.props.deletePost(this.props.post.id);
      this.props.history.push('/feed');
    }
    
    render() {
      const post = this.props.post ? (
        <div className="post">
          <p>{this.props.post.content}</p>
          <div className="center">
            <button onClick={this.handleClick}> Delete Post</button>
          </div>
        </div>
      ) : (
        <div className="center"> Loading post... </div>
      );

      return (
        <div className="container">
          {post}
        </div>
      );
    }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    post: state.posts.posts.find(post => post.id === id),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => { dispatch(deletePost(id));},
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Post);