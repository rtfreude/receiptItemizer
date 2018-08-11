import { combineReducers } from 'redux';
import userInfoReducer from 'reducers/userInfo';
import receiptReducer from 'reducers/receiptReducer';
import modalReducer from 'reducers/modalReducer';

export default combineReducers({
  userInfo: userInfoReducer,
  receipts: receiptReducer,
  modalEditing: modalReducer,
});
