import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunkMiddleware from "redux-thunk";
import coreReducer from "./core/store.core";
const composeEnhancers = composeWithDevTools || compose;

const reducers = combineReducers({
  core: coreReducer
});

export function initializeStore(initialState = {}) {
  return createStore(
    reducers,
    initialState,
    //  composeWithDevTools(applyMiddleware(thunkMiddleware))
    // @ts-ignore
    composeEnhancers(applyMiddleware(thunkMiddleware))
  );
}

/* TODO: Shouldn't have any here. */
