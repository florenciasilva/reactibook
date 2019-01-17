export const deletePost = (post) => {
  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection('posts').doc(post).delete()
      .then(() => {
        console.log('Document successfully deleted!');
        dispatch({type: 'DELETE_SUCCESS'});
      }).catch((err) => {
        console.error('Error removing document: ', err);
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
    }).then(() => {
      dispatch({ type: 'ADD_SUCCESS', post });
    }).catch(err => {
      dispatch({ type: 'ADD_ERROR' }, err);
    });
  };
};