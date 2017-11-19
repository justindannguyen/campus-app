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

import { combineReducers } from "redux"
import globalReducer from "../global/modules"
import homeReducer from "../routes/Home/modules"

export default function makeRootReducer() {
  return combineReducers({ root: globalReducer, home: homeReducer })
}
