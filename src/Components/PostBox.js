import React, { Component }from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/PostActions';
import { Divider, PostArea, Label, PrimarySend } from '../styles';
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
                <section style={{width: "40vw", display: "flex", flexDirection:"column"}}>
                    <h1>Newsfeed</h1>
                    <Label htmlFor="post">Create new post</Label>
                    <PostArea id="post" placeholder="create new post" required maxLength={340} onChange={this.handleChange}>
                    </PostArea>

                    <PrimarySend onClick={this.handleSubmit}>Enviar</PrimarySend>
                </section>
                <Divider />
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
