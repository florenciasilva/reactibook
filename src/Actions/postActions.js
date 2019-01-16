export const deletePost = (id) => {
  return {
    type: 'DELETE_POST',
    id,
  };
};

export const addPost = (post) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection('posts').add({
      ...post,
      createdAt: new Date(),
    }).then(() => {
      dispatch({ type: 'ADD_POST', post });
    }).catch((err) => {
      dispatch({ type: 'ADD_ERROR', err});
    });
  };
};