import React, { Fragment } from 'react';
import { Container, SideNav } from '../styles.js';
import UserBadge from '../Components/UserBadge';
import UserFriends from '../Components/UserFriends';
import PostBox from '../Components/PostBox';

const NewsFeed = () => {
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

export default NewsFeed;