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

import { actionHandlers } from "./SummaryHandlers"

const initialState = {}

export default function reducer(state = initialState, action) {
  const handle = actionHandlers[action.type]
  return handle ? handle(state, action) : state
}
