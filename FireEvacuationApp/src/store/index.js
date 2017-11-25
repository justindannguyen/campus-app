/**
 * Copyright (c) 2017-present, Justin Nguyen.
 * All rights reserved.
 *
 * @author tuan3.nguyen@gmail.com
 *
 * @flow
 * @format
 */
"use strict"

import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { createLogger } from "redux-logger"
import makeRootReducer from "./reducers"

const log = createLogger({ diff: true, collapsed: true })

// a function which can create our store and auto-persist the data
export default function createReduxStore(initialState = {}) {
  const middlewares = [thunk, log]
  const enhancers = []

  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(applyMiddleware(...middlewares), ...enhancers)
  )

  return store
}
