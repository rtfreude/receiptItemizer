import { ADD_RECEIPT } from 'actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_RECEIPT:
      return [...state, action.payload];
    default:
      return state;
  }
}
