import { createStore } from "redux";
import globalReducer from "./reducers/reducer";
import { GLOBAL_STORE_NAME } from "./constants";

const store = createStore(globalReducer);

store.subscribe(() => {
  window.localStorage.setItem(
    GLOBAL_STORE_NAME,
    JSON.stringify(store.getState())
  );
});

export { store };
