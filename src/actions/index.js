import { SAVE_USER_INFO } from 'actions/types';
import { ADD_RECEIPT } from 'actions/types';
import { DELETE_RECEIPT } from 'actions/types';
import { UPDATE_RECEIPT } from 'actions/types';
import { SORT_PRICE } from 'actions/types';
import { RECEIPT_EDITING } from 'actions/types';
import { SORT_CAT } from 'actions/types';

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

export function updateReceipt(id) {
  return {
    type: UPDATE_RECEIPT,
    payload: id,
  };
}

export function receiptEditing(editing) {
  return {
    type: RECEIPT_EDITING,
    payload: editing,
  };
}

export function sortPrice(receipts) {
  return {
    type: SORT_PRICE,
    payload: receipts,
  };
}

export function sortCat(receipts) {
  return {
    type: SORT_CAT,
    payload: receipts,
  };
}
