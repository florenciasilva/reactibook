import React, { Component }from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/PostActions';
import { Divider, PostArea, Label, PrimarySend, TransparentBtn, PrivacyWrapper, SRonly } from '../styles';
import { IoIosGlobe } from 'react-icons/io';
import { FaUsers } from 'react-icons/fa'
class PostBox extends Component {
    constructor(){
        super();
        this.state= {
            content: '',
            user: JSON.parse(localStorage.getItem("user")),
            err: '',
            privacy: false
        }
    }
    handleChange = (e) => {
        this.setState({content: e.target.value});
    };

    handleSubmit = () => {
        const { content, user, privacy } = this.state
        this.props.createPost(content, user, privacy)
    };

    handlePrivacy = (e) => {
        if(e.target.name === 'friends'){
            this.setState({privacy: true})
        };
    }

    render(){
        return (
            <>
                <section style={{width: "40vw", display: "flex", flexDirection:"column"}}>
                    <h1>Newsfeed</h1>
                    <Label htmlFor="post">Create new post</Label>
                    <PostArea id="post" placeholder="create new post" required maxLength={340} onChange={this.handleChange}>
                    </PostArea>
                    <PrivacyWrapper>
                        <TransparentBtn name="public" onClick={this.handlePrivacy}> <IoIosGlobe /> <SRonly>Post privacy is Public</SRonly> </TransparentBtn>
                        <TransparentBtn name="friends" onClick={this.handlePrivacy}> <FaUsers /> <SRonly>Post privacy is Friends only</SRonly></TransparentBtn>
                    </PrivacyWrapper>
                    <PrimarySend onClick={this.handleSubmit}>Send</PrimarySend>
                </section>
                <Divider />
            </>
        );
    };
};

const mapDispatchToProps = {
    createPost
  };

export default connect(null, mapDispatchToProps)(PostBox);
