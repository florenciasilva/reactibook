import React from 'react';
import {NavItem} from 'react-materialize';
import { connect } from 'react-redux';
import { signOut } from '../Actions/loginActions';

const SignedIn = (props) => {
  return (
      <NavItem onClick={props.signOut}>Sign Out</NavItem>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
  
export default connect(null, mapDispatchToProps)(SignedIn);
  