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

import { actionHandlers } from "./GlobalHandlers"

const initialState = {}

/**
 * All global reducers (not belong to any route e.g. template) will be handled here.
 */
export default function reducer(state = initialState, action) {
  const handle = actionHandlers[action.type]
  return handle ? handle(state, action) : state
}
