import { GLOBAL_STORE_NAME, LOGIN_USER, LOGOUT_USER } from "../constants";

export default function userReducer(
  state = JSON.parse(window.localStorage.getItem(GLOBAL_STORE_NAME)).user || {},
  action
) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...action.user,
      };
    case LOGOUT_USER:
      return {};
    default:
      return state;
  }
}
