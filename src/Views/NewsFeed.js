import React, { Fragment, Component } from 'react';
import { Container, SideNav } from '../styles.js';
import UserBadge from '../Components/UserBadge';
import UserFriends from '../Components/UserFriends';
import PostBox from '../Components/PostBox';
import { connect } from 'react-redux';
import { getAllPosts } from '../actions/PostActions';

class NewsFeed extends Component {
    constructor(){
        super();
        this.state = {}
    }

    componentDidMount(){
        this.props.getAllPosts()
    };


    render(){
        return (
            <Fragment>
                <SideNav>
                    <UserBadge />
                    <UserFriends />
                </SideNav>
                <Container>
                    <PostBox />
                </Container>
            </Fragment>
        );
    };
}

const mapDispatchToProps = {
    getAllPosts
};

export default connect(null, mapDispatchToProps)(NewsFeed);