import React from 'react';
import { Link } from 'react-router-dom';
import { Container, PrimaryBtn } from '../styles';

const UserAuthentication = () => {
    return (
        <Container>
            <p style={{fontWeight: 'bold'}}>User Auth is under construction</p>
            <p>but you can go to</p>
            <Link to="/newsfeed" style={{textDecoration: 'none', color: 'white'}}><PrimaryBtn style={{width: '10vw'}}>newsfeed</PrimaryBtn></Link>
            <p>in the meantime</p>
        </Container>
    );
};

export default UserAuthentication;