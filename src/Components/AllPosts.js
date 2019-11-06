import React, { useState, Fragment} from 'react';
import moment from 'moment';
import { Card, Content, Date, PrimaryBtn, Wrapper, DeleteBtn, EditBtn, Divider, EditInput, SendEditBtn } from '../styles';
import { connect } from 'react-redux';
import { editPost, getAllPosts } from '../actions/PostActions';

const AllPosts = (props) => {
    const [ edited, setEditable ] = useState(-1);
    const [ getContent, setContent ] = useState('');
    const [ showSendBtn, setSendBtn ] = useState(-1)
    const [ editStage, setEditStage] = useState(false)


    const handleEdit = (post_id, e, i) => {
            setEditable(post_id);
            setSendBtn(i);
            setEditStage(true)
    }

    const handleOnChange = (e) => {
        setContent(e.target.value)
    }

    const handleSubmit = (e, id, i) => {
        setSendBtn(-1);
        props.editPost(getContent, id);
        props.getAllPosts()
    }


    if(props.posts) {
    return props.posts.map((post, i) => {
        return (
            <Fragment key={post._id}>
                <Card >
                    <Wrapper>
                        <p>{post.user}</p>
                        <Date dateTime={post.createdAt}>{moment(post.createdAt).calendar()}</Date>
                    </Wrapper>
                    <Content style={{display: showSendBtn === i ? 'none' : 'flex'}}>{post.content}</Content>
                    <EditInput id={i} placeholder={post.content} onChange={handleOnChange} style={{display: showSendBtn === i ? 'flex' : 'none'}} />
                    <SendEditBtn style={{display: showSendBtn === i ? 'flex' : 'none'}} onClick={(e) => handleSubmit(e, post._id, i)}> Send </SendEditBtn>
                    <Wrapper>
                        <DeleteBtn>Delete</DeleteBtn>
                        <EditBtn onClick={(e) => {handleEdit(post._id, e, i)}}>Edit</EditBtn>
                        <PrimaryBtn>Like</PrimaryBtn>
                    </Wrapper>
                </Card>
                <Divider />
            </Fragment>
        );
    });
    } else {
      return (
        <p>Loading</p>
      )
    }
};

const mapDispatchToProps = {
    editPost,
    getAllPosts
}

export default connect(null, mapDispatchToProps)(AllPosts)