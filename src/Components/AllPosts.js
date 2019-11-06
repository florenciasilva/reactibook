import React, { useState, Fragment} from 'react';
import moment from 'moment';
import { Card, Content, Date, PrimaryBtn, Wrapper, DeleteBtn, EditBtn, Divider, EditInput, SendEditBtn } from '../styles';
import { connect } from 'react-redux';
import { editPost, getAllPosts, deletePost } from '../actions/PostActions';

const AllPosts = (props) => {
    const [ edited, setEditable ] = useState(-1);
    const [ getContent, setContent ] = useState('');
    const [ editElements, setEditElements] = useState(-1)
    const [ editStage, setEditStage] = useState(false)
    const [ deletedPost, setDeletedPost ] = useState(-1)

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
        }
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
                    <Content style={{display: editElements === i ? 'none' : 'flex'}}>{post.content}</Content>
                    <EditInput id={i} placeholder={post.content} onChange={handleOnChange} style={{display: editElements === i ? 'flex' : 'none'}} />
                    <SendEditBtn style={{display: editElements === i ? 'flex' : 'none'}} onClick={(e) => handleSubmit(e, post._id, i)}> Send </SendEditBtn>
                    <Wrapper>
                        <DeleteBtn onClick={() => handleDelete(post._id)}>Delete</DeleteBtn>
                        <EditBtn onClick={() => handleEdit(post._id, i)}>Edit</EditBtn>
                        <PrimaryBtn>Like</PrimaryBtn>
                    </Wrapper>
                </Card>
                <Divider />
            </Fragment>
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