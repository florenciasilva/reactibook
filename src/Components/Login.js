import React, { Component } from 'react';
import { Row, Input, Button} from 'react-materialize';
import { connect } from 'react-redux';
import { signIn } from '../Actions/loginActions';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }
  handleLogin = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
    this.history.push('/feed');
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }

  render() {
    return (
      <div className="container">
        <Row>
          <Input type="email" label="Email" id="email" onChange={this.handleChange} s={7} m={6} l={6} />
          <Input type="password" label="Password" id="password" onChange={this.handleChange} s={7} m={6} l={6} />
          <Button onClick={this.handleLogin}> Log in!</Button>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.login.authError);
  return {
    authError: state.login.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
