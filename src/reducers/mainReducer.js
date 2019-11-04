const initState = {
  posts: []
};

const postReducer = (state = initState, action) => {
  switch (action.type) {

    case 'CREATE_POST_SUCCESS':
      console.log(action.json)

      return {
        ...state,
        posts: [...state.posts, action.json]
      };

    case 'FETCH_ALL_POSTS':
      //console.log(action.json)
      return {
       ...state, posts: action.json
    };

    case 'ERR_CREATING_POST':
      console.log(action.err);
      return {
        state,
      };

    case 'ERR_FETCHING_POSTS':
      console.log(action.err);
      return {
        state,
      }

    case 'DELETE_SUCCESS':
      return state.filter(({ id }) => id !== action.id);

    case 'DELETE_ERR':
      console.log('Error');
      return (
        state
      );

    case 'EDIT_SUCCESS':
      return {
        ...state,
      };
    default:
      return state;
  }
};


export default postReducer;