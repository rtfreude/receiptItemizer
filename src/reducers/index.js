import { combineReducers } from 'redux';
import userInfoReducer from 'reducers/userInfo';
import addReceiptReducer from 'reducers/addReceipt';

export default combineReducers({
  userInfo: userInfoReducer,
  receipts: addReceiptReducer,
});
