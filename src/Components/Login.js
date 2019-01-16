import React, { Component } from 'react';
import { Row, Input, Button, Col} from 'react-materialize';
import { connect } from 'react-redux';
import { signIn } from '../Actions/loginActions';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }
  handleLogin = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to='/feed' /> 
    return (
      <StyledDiv>
        <Row>
          <StyledCol s={10} m={12} l={12}>
          <Input type="email" label="Email" id="email" onChange={this.handleChange} validate required="required"/>
          <StyledInput type="password" label="Password" id="password" onChange={this.handleChange} validate required="required"/>
          { authError ? <p>{authError}</p> : null }

          <StyledButton onClick={this.handleLogin} center> Log in!</StyledButton>
          </StyledCol>
        </Row>
      </StyledDiv>
    );
  }
}

const StyledDiv = styled.div `
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledCol = styled(Col) `
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const StyledInput = styled(Input) `
  margin-top: 5%;
`;

const StyledButton = styled(Button) `
  background-color: #78D1C3;
  margin-top: 5%;

  &:hover {
    background-color: #2E615E;
  }
`;


const mapStateToProps = (state) => {
  console.log(state.login.authError);
  return {
    authError: state.login.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
