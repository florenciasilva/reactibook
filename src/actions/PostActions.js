


export const createPost = (content) => {
    return dispatch => {
        return fetch('http://localhost:3000/post', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(content)
        })
        .then(res => res.json())
        .then(json => {
            dispatch({type: 'ALL_POSTS_SUCCESS'})
        })
        .catch(err => this.setState(err))
    }
}