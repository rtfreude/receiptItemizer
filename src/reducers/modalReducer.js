import { RECEIPT_EDITING } from 'actions/types';

export default function(state = false, action) {
  switch (action.type) {
    case RECEIPT_EDITING:
      return action.payload;
    default:
      return state;
  }
}
