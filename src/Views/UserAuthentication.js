import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, PrimaryBtn } from '../styles';
import { connect } from 'react-redux';
import { login, register } from '../actions/UserActions';
import { withRouter } from 'react-router-dom';


const UserAuthentication = (props) => {
    const [ userCredentials, setCredentials ] = useState({ email: '', password:'' })
    const [ userNewCredentials, setNewCredentials ] = useState({ username: '', email: '', password:'' })



    const handleCredentials = (e) => {
        let credentials = {...userCredentials, [e.target.type]: e.target.value};
        setCredentials(credentials);
    };

    const handleNewCredentials = (e) => {
        let credentials = {...userNewCredentials, [e.target.name]: e.target.value};
        setNewCredentials(credentials);
    };

    const handleLogin = () => {
        if(!userCredentials){
        } else {
            props.login(userCredentials, props.history);
        };
    };

    const handleRegister = () => {
        if(!userNewCredentials){
        } else {
            props.register(userNewCredentials, props.history);
        };
    };

    return (
        <Container>
            <input type="email" required onChange={handleCredentials} />
            <input type="password" required onChange={handleCredentials} />
            <button onClick={handleLogin}>Login</button>

            <input type="text" name="username" required onChange={handleNewCredentials} />
            <input type="email" name="email" required onChange={handleNewCredentials} />
            <input type="password" name="password" required onChange={handleNewCredentials} />
            <button onClick={handleRegister}>Register</button>



            <p style={{fontWeight: 'bold'}}>User Auth is under construction</p>
            <p>but you can go to</p>
            <Link to="/newsfeed" style={{textDecoration: 'none', color: 'white'}}><PrimaryBtn style={{width: '10vw'}}>newsfeed</PrimaryBtn></Link>
            <p>in the meantime</p>
        </Container>
    );
};

const mapDispatchToProps = {
    login,
    register
}

export default connect(null, mapDispatchToProps)(withRouter(UserAuthentication));