import React, { useState } from 'react';
import { AuthContainer, PrimaryBtn, Divider, LabelInput, Input } from '../styles';
import { connect } from 'react-redux';
import { login, register } from '../actions/UserActions';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

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
        <AuthContainer>
        <h1> Reactibook </h1>
        <Divider />
            <LabelInput>Login with your email and password
                <Input type="email" placeholder="Enter your email" required onChange={handleCredentials} />
                <Input type="password" placeholder="Enter your password" required onChange={handleCredentials} />
                </LabelInput>
            <PrimaryBtn style={{margin: "0", width: "10vw"}} onClick={handleLogin}>Login</PrimaryBtn>

            <Divider />

            <LabelInput>Register to Reactibook
                <Input type="text" name="username" placeholder="Enter your username" required onChange={handleNewCredentials} />
                <Input type="email" name="email" placeholder="Enter your email" required onChange={handleNewCredentials} />
                <Input type="password" name="password" placeholder="Enter your password" required onChange={handleNewCredentials} />
            </LabelInput>
            <PrimaryBtn style={{margin: "0", width: "10vw"}} onClick={handleRegister}>Register</PrimaryBtn>

            <Divider />

        </AuthContainer>
    );
};

const mapDispatchToProps = {
    login,
    register
}

export default connect(null, mapDispatchToProps)(withRouter(UserAuthentication));