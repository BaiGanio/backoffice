import { logoutUser } from "../../services/account.service";
import { LOGIN_USER, LOGOUT_USER } from "../constants";

function loginUserAction(user) {
  return {
    type: LOGIN_USER,
    user,
  };
}

function logoutUserAction() {
  logoutUser();
  return {
    type: LOGOUT_USER,
  };
}

export { loginUserAction, logoutUserAction };
