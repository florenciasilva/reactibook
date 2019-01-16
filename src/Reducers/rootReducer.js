import postReducer from './postReducer';
import loginReducer from './loginReducer';
import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';


const rootReducer = combineReducers({
  login: loginReducer,
  posts: postReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer; 