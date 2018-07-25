import { combineReducers } from 'redux';
import userInfoReducer from 'reducers/comments';

export default combineReducers({
  userInfo: userInfoReducer,
});
