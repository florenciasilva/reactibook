import React, { Component }from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/PostActions';

class PostBox extends Component {
    constructor(){
        super();
        this.state= {
            content: '',
            user: '',
            date: Date,
            err: ''
        }
    }
    handleChange = (e) => {
        this.setState({content: e.target.value});
    };

    handleSubmit = () => {
        const content = this.state;
        this.props.createPost(content)

    };

    render(){
        return (
            <>
                <h1>Newsfeed</h1>
                <label htmlFor="post">Create new post</label>
                <textarea id="post" onChange={this.handleChange}>
                </textarea>

                <button onClick={this.handleSubmit}>Enviar</button>
            </>
        );
    };
};

/* const mapDispatchToProps = dispatch => {
    return {
        createPost: (content) => dispatch(createPost(content)),
      };
    };
*/
const mapDispatchToProps = {
    createPost
  };

export default connect(null, mapDispatchToProps)(PostBox);
