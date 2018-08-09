import { SAVE_USER_INFO } from 'actions/types';
import { ADD_RECEIPT } from 'actions/types';
import { DELETE_RECEIPT } from 'actions/types';

export function saveUserInfo(userInfo) {
  return {
    type: SAVE_USER_INFO,
    payload: userInfo,
  };
}

export function addReceipt(receipt) {
  return {
    type: ADD_RECEIPT,
    payload: receipt,
  };
}

export function deleteReceipt(id) {
  return {
    type: DELETE_RECEIPT,
    payload: id,
  };
}
