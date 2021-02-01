import { GLOBAL_STORE_NAME, HIDE_LOADING, SHOW_LOADING } from "../constants";

const initialValues = {
  loading: false,
};

export default function commonReducer(
  state = JSON.parse(window.localStorage.getItem(GLOBAL_STORE_NAME))?.common ||
    initialValues,
  action
) {
  switch (action.type) {
    case SHOW_LOADING:
      return {
        ...state,
        loading: true,
      };
    case HIDE_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
}
