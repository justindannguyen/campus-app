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

export function receiveSummaryDataAction(summaryData) {
  return {
    type: RECEIVE_SUMMARY_DATA,
    payload: summaryData
  }
}

export function loadSummaryData() {
  // TODO call API to get data, for now just return nothing
  return dispatch => {
    dispatch(receiveSummaryDataAction(null))
    dispatch(setSelectedIndex(0))
  }
}

export function setSelectedIndex(index) {
  return dispatch => dispatch(setSelectedLocationAction(index))
}

export function setSelectedSummaryId(id) {
  return (dispatch, getState) => {
    const index = getState().summary.summaryOfLocations.findIndex(summary => summary.id === id)
    if (index >= 0) {
      dispatch(setSelectedIndex(index))
    }
  }
}
