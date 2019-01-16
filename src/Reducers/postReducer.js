const initState = {
  users: [],
  posts: [
    {id: 1, content:'Test Test Test', likes: 0, author: null}
  ]
};
  
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return {
        ...state,
        posts: state.posts,
      };
  
    case 'DELETE_POST':
      let newPosts = state.posts.filter(post => {
        return action.id !== post.id;
      });
      return {
        ...state,
        posts: newPosts,
      };
  
    case 'EDIT_POST':
      return {
        ...state,
      };
    default:
      return state;
  }
};
  
  
export default rootReducer;