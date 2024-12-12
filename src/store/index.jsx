import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { productsReducer } from "./reducers/productsReducer";

const rootReducer = combineReducers({
  dataProducts: productsReducer,
});

const loadState = () => {
  try {
    const serialState = localStorage.getItem("reduxState");
    if (!serialState) return undefined;
    return JSON.parse(serialState);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
  const state = store.getState();
  try {
    const serialState = JSON.stringify({
      dataProducts: state.dataProducts,
    });
    localStorage.setItem("reduxState", serialState);
  } catch (error) {
    console.log("Gagal menyimpan state ke local", error);
  }
});

export default store;
