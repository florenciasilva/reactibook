import React, { useState} from 'react';
import moment from 'moment';
import { Card, Content, Date, ColumnContainer, Wrapper, TransparentBtn, SecondaryBtn, Divider, EditInput, SendEditBtn } from '../styles';
import { connect } from 'react-redux';
import { editPost, getAllPosts, deletePost } from '../actions/PostActions';

const AllPosts = (props) => {
    const [ edited, setEditable ] = useState(-1);
    const [ getContent, setContent ] = useState('');
    const [ editElements, setEditElements] = useState(-1)
    const [ editStage, setEditStage] = useState(false)

    const handleEdit = (post_id, i) => {
            setEditable(post_id);
            setEditElements(i);
            setEditStage(true)
    }

    const handleOnChange = (e) => {
        setContent(e.target.value)
    }

    const handleSubmit = (e, id, i) => {
        setEditElements(-1);
        props.editPost(getContent, id);
        props.getAllPosts()
    }

    const handleDelete = (id) => {
        const ask = window.confirm('Are you sure?');
        if(ask) {
            props.deletePost(id)
        };
    };

    const user = JSON.parse(localStorage.getItem("user"));

    if (props.posts && user) {
    return props.posts.map((post, i) => {
        console.log(post, '<- post', user, '<- user')
        return (
            <ColumnContainer style={{display: post.privacy && post.friends !== user.email ? 'none' : 'flex'}} key={post._id}>
                <Card  >
                    <Wrapper>
                        <p>{post.username}</p>
                        <Date dateTime={post.createdAt}>{moment(post.createdAt).calendar()}</Date>
                    </Wrapper>
                    <Content style={{display: editElements === i ? 'none' : 'flex'}}>{post.content}</Content>
                    <EditInput id={i} placeholder={post.content} onChange={handleOnChange} style={{display: editElements === i ? 'flex' : 'none'}} />
                    <SendEditBtn style={{display: editElements === i ? 'flex' : 'none'}} onClick={(e) => handleSubmit(e, post._id, i)}> Send </SendEditBtn>
                    <Wrapper>
                        <TransparentBtn style={{display: user.email === post.email ? 'flex' : 'none'}} onClick={() => handleDelete(post._id)}>Delete</TransparentBtn>
                        <SecondaryBtn style={{display: user.email === post.email ? 'flex' : 'none'}} onClick={() => handleEdit(post._id, i)}>Edit</SecondaryBtn>
                    </Wrapper>
                </Card>
                <Divider />
            </ColumnContainer >
        );
    });
    } else {
      props.getAllPosts()
      return (
          <p>Loading</p>
      )
    }
};

const mapDispatchToProps = {
    editPost,
    getAllPosts,
    deletePost
}

export default connect(null, mapDispatchToProps)(AllPosts)