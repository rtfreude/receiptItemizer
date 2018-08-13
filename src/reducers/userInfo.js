import { SAVE_USER_INFO } from 'actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case SAVE_USER_INFO:
      return {...state, ...action.payload};
    default:
      return state;
  }
}
