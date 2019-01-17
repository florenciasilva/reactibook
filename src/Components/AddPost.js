import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../Actions/postActions';
import { Redirect } from 'react-router-dom';
import { Col, Row, Card, Button, Icon } from 'react-materialize';
import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';

class AddPost extends Component {
  state = {
    content: '',
    privacy: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  }
  handleSubmit = () => {
    console.log(this.state)
    this.props.addPost(this.state);
  }

  handleOnlyFriends = () => {
    this.setState({ privacy: 'onlyFriends'});
  }

  handlePublic = () => {
    this.setState({ privacy: 'public'});
  }

  render() {
    const { auth, profile } = this.props;
    if (!auth.uid) {return <Redirect to="/" />;} 
    return (
      <Row>
        <Col s={12} m={12}>
          <StyledCard>
            <TextareaAutosize 
              placeholder={'What are you thinking about, ' + profile.firstName} 
              id="content" 
              onChange={this.handleChange} />
            <StyledDiv>
              <StyledPrivacyButton 
                right 
                onClick={this.handleOnlyFriends}>
                <Icon>group</Icon>
              </StyledPrivacyButton>
              <StyledPrivacyButton 
                right 
                onClick={this.handlePublic}>
                <Icon>public</Icon>
              </StyledPrivacyButton>
            </StyledDiv>
            <StyledCenterDiv>
              <StyledButton onClick={this.handleSubmit}>
              Send
              </StyledButton>
            </StyledCenterDiv> 
          </StyledCard>
        </Col>
      </Row>
    );
  }
}

const StyledCard = styled(Card) `
`;

const StyledCenterDiv = styled.div `
  display: flex;
  justify-content: center;
`;

const StyledButton = styled(Button) `
  background-color: #78D1C3;
  margin-top: 5%;
  &:hover {
    background-color: #2E615E;
  }
`;

const StyledDiv = styled.div `
display: flex;
justify-content: flex-end;
`;

const StyledPrivacyButton = styled(Button) `
  background-color: transparent;
  color: black;
  box-shadow: 0px 0px 0px transparent;

`;

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: (post) => dispatch(addPost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);