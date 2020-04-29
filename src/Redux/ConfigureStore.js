import { createStore, combineReducers, applyMiddleware } from "redux";

import { Samples } from "./Samples";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      samples: Samples,
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
