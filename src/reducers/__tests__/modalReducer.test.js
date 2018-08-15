import modalReducer from '../modalReducer';
import { RECEIPT_EDITING } from 'actions/types';

it('handles actions of type RECEIPT_EDITING', () => {
  const action = {
    type: RECEIPT_EDITING,
    payload: true
  };

  const newState = modalReducer(false, action);

  expect(newState).toEqual(true);
});

// it('handles action with unknown type', () => {
//   const newState = commentsReducer([], { type: 'LKAFDSJLKAFD' });
//
//   expect(newState).toEqual([]);
// });
