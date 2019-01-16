const initState = {
  authError: null,
};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case 'AUTH_ERR':
      console.log('Login Error', action.err.message);
      alert(action.err.message);
      return {
        ...state,
        authError: 'Login Failed :c',
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
