import React from 'react';
import {Navbar, NavItem} from 'react-materialize';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SignedIn from './SignedIn';
import SignedOut from './SignedOut';

const Nav = (props) => {
  const { auth } = props;
  const links = auth.uid ? <SignedIn /> : <SignedOut />;
  return (
    <div>
      <Navbar brand={<Link to="/feed">Reactibook</Link>} right>
        <NavItem> { links }</NavItem>
      </Navbar>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state)
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Nav);
