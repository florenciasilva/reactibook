const initState = {
  posts: [],
  user: []
};

const postReducer = (state = initState, action) => {
  switch (action.type) {

    case 'CREATE_POST_SUCCESS':
      return {
        ...state,
        posts: [...state.posts, action.json]
      };

    case 'CREATE_USER_SUCCESS':
      return {
        ...state,
      }

    case 'LOGIN_USER_SUCCESS':
      return {
        ...state,
      }

    case 'ERR_CREATING_USER':
      console.log(action.err)
      return {
        state
      }

    case 'ERR_LOGIN_USER':
      console.log(action.err)
      return {
        state
    }


    case 'FETCH_ALL_POSTS':
      console.log('holi fetch', state)
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
      return state.posts.filter(({ id }) => id !== action.id);

    case 'DELETE_ERR':
      console.log(action.err.message);
      return (
        state
      );

    case 'EDIT_POST_SUCCESS':
      return {
        ...state
      }


    case 'ERR_EDIT_POST':
      return {
        state
      };

    default:
      return state;
  }
};


export default postReducer;