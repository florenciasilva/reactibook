const initState = {
  authError: null,
};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case 'AUTH_ERR':
      console.log('Login Error');
      return {
        ...state,
        authError: action.err.message,
      };
    case 'LOGGED_IN':
      console.log('Login Working');
      return {
        ...state,
        authError: null,
      };
    default:
      return state;
  }
};

export default loginReducer;
