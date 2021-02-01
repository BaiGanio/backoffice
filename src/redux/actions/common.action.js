import { HIDE_LOADING, SHOW_LOADING } from "../constants";

function showLoadingAction() {
  return {
    type: SHOW_LOADING,
  };
}

function hideLoadingAction() {
  return {
    type: HIDE_LOADING,
  };
}

export { showLoadingAction, hideLoadingAction };
