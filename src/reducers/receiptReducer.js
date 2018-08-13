import {
  ADD_RECEIPT,
  DELETE_RECEIPT,
  UPDATE_RECEIPT,
  SORT_PRICE,
  SORT_CAT,
} from 'actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_RECEIPT:
      return [...state, action.payload];
    case DELETE_RECEIPT:
      const delContent = state.slice();
      return delContent.filter(receipt => receipt.uid !== action.payload);
    case UPDATE_RECEIPT:
      const upState = state.slice();
      return upState.map((receipt) => {
        if(state.uid === action.payload.uid) {
          //skip the date for now...
          return { ...action.payload,
                  companyName: action.payload.companyName,
                  price: action.payload.price,
                  description: action.payload.description,
                  category: action.payload.category,
                };
        }
        return receipt;
      })
    case SORT_PRICE:
      return [...state]
    case SORT_CAT:
      return [...state]
    default:
      return state;
  }
}
