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
            dispatch({type: 'CREATE_POST_SUCCESS', json})
        })
        .catch(err => dispatch({type: 'ERR_CREATING_POST', err}))
    }
};

export const getAllPosts = () => {
    return dispatch => {
        return fetch('http://localhost:3000/posts', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'GET',
        })
        .then(res => res.json())
        .then(json => {
            dispatch({type: 'FETCH_ALL_POSTS', json})
        })
        .catch(err => dispatch({type: 'ERR_FETCHING_POSTS', err}))
    };
};

export const editPost = (post, id) => {
    return dispatch => {
        return fetch('http://localhost:3000/edit/' + id, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'PUT',
            body: JSON.stringify({content: post})
        })
        .then(res => res.json())
        .then(json => {
            dispatch({type: 'EDIT_POST_SUCCESS', json})
        })
        .catch(err => dispatch({type: 'ERR_EDIT_POST', err}))
    };
}