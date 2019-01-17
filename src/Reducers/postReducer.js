const initState = {};
  
const postReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_SUCCESS':
    console.log(action.project)
      return {
        state
      };

    case 'ADD_ERROR':
     console.log(action.err)
      return {
        state
      }
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
  
  
export default postReducer;