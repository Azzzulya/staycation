import { createSocket, applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {}

const middleware =  [thunk]

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window._REDUX_DEVTOOLS_EXTENSION__
      ? window._REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
)

export default store;
