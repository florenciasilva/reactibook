import React, { Fragment, Component } from 'react';
import { Container, SideNav } from '../styles.js';
import UserBadge from '../Components/UserBadge';
import UserFriends from '../Components/UserFriends';
import PostBox from '../Components/PostBox';
import AllPosts from '../Components/AllPosts';
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
        console.log(this.props.posts)
        return (
            <Fragment>
                <SideNav>
                    <UserBadge />
                    <UserFriends />
                </SideNav>
                <Container>
                    <PostBox />
                    <AllPosts posts={this.props.posts} />
                </Container>
            </Fragment>
        );
    };
}

const mapDispatchToProps = {
    getAllPosts
};

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeed);