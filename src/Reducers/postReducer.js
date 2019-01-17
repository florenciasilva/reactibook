const initState = {};
  
const postReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_SUCCESS':
      return {
        state,
      };

    case 'ADD_ERROR':
      console.log(action.err);
      return {
        state,
      };
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