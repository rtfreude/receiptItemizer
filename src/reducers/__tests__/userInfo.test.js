import modalReducer from '../modalReducer';
import { SAVE_USER_INFO } from 'actions/types';

it('handles actions of type RECEIPT_EDITING', () => {
  const action = {
    type: SAVE_USER_INFO,
    payload: {}
  };

  const newState = userInfo({

  }, action);

  expect(newState).toEqual({});
});
