import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { productsReducer } from "./reducers/productsReducer";

// menggabungkan semua reducer
const rootReducer = combineReducers({
  dataProducts: productsReducer,
});

// membuat store serta menambahkan middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
