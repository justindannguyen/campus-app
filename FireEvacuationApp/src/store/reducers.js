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
import summaryReducer from "../routes/Summary/modules"
import detailReducer from "../routes/Detail/modules"
import settingReducer from "../routes/Setting/modules"

export default function makeRootReducer() {
  return combineReducers({
    root: globalReducer,
    summary: summaryReducer,
    detail: detailReducer,
    setting: settingReducer
  })
}
