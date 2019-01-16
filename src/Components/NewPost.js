import React, { Component } from 'react';
import {Col, Row, Card, Button, Input} from 'react-materialize';

class NewPost extends Component {

    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value,
      });
    }
    render() {
      return (
        <Row>
          <Col>
            <Card>
              <Input id="post" onChange={this.handleChange}/>
              <Button onClick={this.handleSubmitPost}>Send</Button>
            </Card>
          </Col>
        </Row>
      );
    }
}

export default NewPost