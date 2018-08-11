import { ADD_RECEIPT, DELETE_RECEIPT, UPDATE_RECEIPT, SORT_PRICE_ASC } from 'actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case ADD_RECEIPT:
      return [...state, action.payload];
    case DELETE_RECEIPT:
      return state.filter(receipt => receipt.uid !== action.payload);
    case UPDATE_RECEIPT:
      return state.map((receipt) => {
        if(receipt.uid === action.payload.uid) {
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
    case SORT_PRICE_ASC:
      return action.payload;
    default:
      return state;
  }
}
