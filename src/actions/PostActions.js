export const createPost = (content, user, privacy) => {
    return dispatch => {
        return fetch('https://reactibook-api.herokuapp.com/post', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({content: content, email: user.email, username: user.username, _id: user._id, privacy: privacy, friends: user.friends})
        })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            dispatch({type: 'CREATE_POST_SUCCESS', json})
        })
        .catch(err => dispatch({type: 'ERR_CREATING_POST', err}))
    }
};

export const getAllPosts = () => {
    return dispatch => {
        return fetch('https://reactibook-api.herokuapp.com/posts', {
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
        return fetch('https://reactibook-api.herokuapp.com/edit/' + id, {
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
};

export const deletePost = (id) => {
    return dispatch => {
        return fetch('https://reactibook-api.herokuapp.com/delete/' + id, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(json => {
            const id = json.id
            dispatch({type: 'DELETE_SUCCESS', id})
            dispatch({type: 'FETCH_ALL_POSTS'})
        })
        .catch(err => dispatch({type: 'DELETE_ERR', err}))
    };

}