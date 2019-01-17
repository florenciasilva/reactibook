export const deletePost = (id) => {
  return {
    type: 'DELETE_POST',
    id,
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
    }).then(() => {
      dispatch({ type: 'ADD_SUCCESS', post });
    }).catch(err => {
      dispatch({ type: 'ADD_ERROR' }, err);
    });
  };
};