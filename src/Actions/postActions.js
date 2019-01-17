export const deletePost = (post) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection('posts').doc(post).delete()
      .then(() => {
        dispatch({type: 'DELETE_SUCCESS'});
      }).catch((err) => {
        dispatch({type: 'DELETE_ERR'});
      });
  };
};

export const addPost = (post) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('posts').add({
      ...post,
      authorFirstName: profile.firstName,
      authorId: authorId,
      createdAt: new Date(),
      privacy: post.privacy,
      isFriendsWith: profile.isFriendsWith,
    }).then(() => {
      dispatch({ type: 'ADD_SUCCESS', post });
    }).catch(err => {
      dispatch({ type: 'ADD_ERROR' }, err);
    });
  };
};

export const editPost = (post) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    const id = post.id;
    const update = post.update;
    const data = {
      id: id,
      authorFirstName: post.author,
      authorId: post.authorId,
      content: update,
      createdAt: post.date,
      isFriendsWith: post.isFriendsWith,
      privacy: post.privacy,

    };
    firestore.collection('posts').doc(id).set(data).then(() => {
      dispatch({type: 'EDIT_SUCCESS', post});
    });
  };
}; 


