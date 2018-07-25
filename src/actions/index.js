import { SAVE_USER_INFO } from 'actions/types';

export function saveUserInfo(userInfo) {
  return {
    type: SAVE_USER_INFO,
    payload: userInfo
  };
}
