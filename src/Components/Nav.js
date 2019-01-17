import React from 'react';
import {Navbar, NavItem} from 'react-materialize';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';
import styled from 'styled-components';

const Nav = (props) => {
  const { auth } = props;
  const links = auth.uid ? <SignedIn /> : <SignedOut />;
  return (
    <div>
      <StyledNavBar brand={<StyledLink to="/feed">Reactibook</StyledLink>} right>
        <NavItem> { links }</NavItem>
      </StyledNavBar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};


const StyledNavBar = styled(Navbar) `
  background-color: #78D1C3;
  color: white;
`;

const StyledLink = styled(Link) `
  margin-left: 12%;
`;


export default connect(mapStateToProps)(Nav);
