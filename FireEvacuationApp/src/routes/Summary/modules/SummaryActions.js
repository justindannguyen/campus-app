import { setTimeout } from "core-js/library/web/timers"

/**
 * Copyright (c) 2017-present, Justin Nguyen.
 * All rights reserved.
 *
 * @author tuan3.nguyen@gmail.com
 *
 * @flow
 * @format
 */
;("use strict")

export const RECEIVE_SUMMARY_DATA = "RECEIVE_SUMMARY_DATA"
export const SET_SELECTED_LOCATION = "SET_SELECTED_LOCATION"

export function setSelectedLocationAction(location) {
  return {
    type: SET_SELECTED_LOCATION,
    payload: location
  }
}

function receiveSummaryDataAction(summaryData) {
  return {
    type: RECEIVE_SUMMARY_DATA,
    payload: summaryData
  }
}

export function loadSummaryData() {
  // TODO call API to get data, for now just return nothing
  return dispatch => {
    dispatch(receiveSummaryDataAction(null))
    dispatch(setSelectedLocation(0))
  }
}

export function setSelectedLocation(location) {
  return dispatch => dispatch(setSelectedLocationAction(location))
}
