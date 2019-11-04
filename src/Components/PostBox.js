import React, { Component }from 'react';

class PostBox extends Component {
    constructor(){
        super();
        this.state= {
            content: '',
            user: '',
            date: Date,
            err: ''
        }
    }
    handleChange = (e) => {
        this.setState({content: e.target.value});
    };

    handleSubmit = () => {
        const content = this.state;
        fetch('http://localhost:3000/post', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(content)
        })
        .then(res => console.log(res))
        .catch(err => this.setState(err))
    };

    render(){
        return (
            <>
                <h1>Newsfeed</h1>
                <label htmlFor="post">Create new post</label>
                <textarea id="post" onChange={this.handleChange}>
                </textarea>

                <button onClick={this.handleSubmit}>Enviar</button>
            </>
        );
    };
};

export default PostBox