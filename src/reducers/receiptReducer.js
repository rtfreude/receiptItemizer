import { ADD_RECEIPT, DELETE_RECEIPT } from 'actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_RECEIPT:
      return [...state, action.payload];
    case DELETE_RECEIPT:
      return state.filter(receipt => receipt.uid !== action.payload);
    default:
      return state;
  }
}
