import { createStore, applyMiddleware } from "redux";
import persistStore from "redux-persist/es/persistStore";
import logger from 'redux-logger'

import rootReducer from "./root-reducer";

const middlewares = [logger];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

const st = {store, persistor}
export default st;