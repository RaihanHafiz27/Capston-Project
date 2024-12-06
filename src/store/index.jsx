import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { productsReducer } from "./reducers/productsReducer";

// menggabungkan semua reducer
const rootReducer = combineReducers({
  dataProducts: productsReducer,
});

const loadState = () => {
  try {
    const serialState = localStorage.getItem("reduxState");
    console.log(serialState);
    if (!serialState) return undefined;
    return JSON.parse(serialState);
  } catch (error) {
    console.log(error);
  }
};

const persistedState = loadState();

// membuat store serta menambahkan middleware
const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

// console.log("store berhasil", store.getState());

store.subscribe(() => {
  const state = store.getState();
  try {
    const serialState = JSON.stringify({
      dataProducts: state.dataProducts,
    });
    localStorage.setItem("reduxState", serialState);
    console.log("berhasil", serialState);
  } catch (error) {
    console.log("Gagal menyimpan state ke local", error);
  }
});

export default store;
