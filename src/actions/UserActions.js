
export const login = (userCredentials, location) => {
    return dispatch => {
        return fetch('https://reactibook-api.herokuapp.com/user/' + userCredentials.email, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(userCredentials)
        })
        .then(res => res.json())
        .then(json => {
            const user = {username: json.username, email: json.email, _id: json._id, friends: json.friends}
            dispatch({type: 'LOGIN_USER_SUCCESS', user})
            location.push('/newsfeed');
            localStorage.setItem("user", JSON.stringify(user))

        })
        .catch(err => dispatch({type: 'ERR_LOGIN_USER', err}))
    };
};

export const register = (userCredentials, location) => {
    return dispatch => {
        return fetch('https://reactibook-api.herokuapp.com/newUser', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify(userCredentials)
        })
        .then(res => res.json())
        .then(json => {
            const user = {username: json.data.username, email: json.data.email, _id: json.data._id, friends: json.data.friends}
            dispatch({type: 'CREATE_USER_SUCCESS'})
            alert('Success')
            localStorage.setItem("user", JSON.stringify(user))
            location.push('/newsfeed')
        })
        .catch(err => {
            dispatch({type: 'ERR_CREATING_USER', err})
            alert(err.message)
        })
    };
};

/*
export const addFriend = (newFriend, id) => {
    const payload = {_id: id, newFriend: newFriend}
    console.log(payload)
    return dispatch => {
        return fetch('https://reactibook-api.herokuapp.com/addFriend/' + id, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            method: 'PUT',
            body: JSON.stringify(payload)
        })
        .then(res => {
            console.log(res)
            res.json();
        })
        .then(json => {
            console.log(json)
            dispatch({type: 'ADD_FRIEND_SUCCESS', json})
            const user = localStorage.getItem("user")
            localStorage.setItem(user, json)
        })
        .catch(err => dispatch({type: 'ERR_ADD_FRIEND', err}))
    };
};
*/