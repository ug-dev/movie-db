import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "./rootReducer.js";

const sagaMiddleware = createSagaMiddleware();

const loggerMiddleware = createLogger();
const middleWare = () => {
  const enhancer = compose(applyMiddleware(sagaMiddleware, loggerMiddleware));
  return composeWithDevTools(enhancer);
};
const store = createStore(allReducers, middleWare());

sagaMiddleware.run(rootSaga);

export default store;
