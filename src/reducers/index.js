import { combineReducers } from 'redux';
import userInfoReducer from 'reducers/userInfo';
import receiptReducer from 'reducers/receiptReducer';

export default combineReducers({
  userInfo: userInfoReducer,
  receipts: receiptReducer,
});
