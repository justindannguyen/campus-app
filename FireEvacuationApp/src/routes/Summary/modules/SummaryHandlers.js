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

import update from "immutability-helper"
import { RECEIVE_SUMMARY_DATA, SET_SELECTED_LOCATION } from "./SummaryActions"

export const actionHandlers = {
  RECEIVE_SUMMARY_DATA: handleLoadSummaryData,
  SET_SELECTED_LOCATION: handleSetSelectedLocation
}

function handleSetSelectedLocation(state, action) {
  const index = action.payload
  return update(state, {
    selectedIndex: {
      $set: index
    },
    selectedSummary: {
      $set: state.summaryOfLocations[index]
    },
    // TODO random for now as mock data
    childrenSummaries: {
      $set: state.summaryOfLocations.filter(value => Math.random() > 0.3)
    }
  })
}

function handleLoadSummaryData(state, action) {
  // TODO this is mock data
  const data = [
    {
      id: "e1",
      name: "eTown 1",
      values: {
        ["safety"]: 5,
        ["unsafety"]: 10,
        ["unknown"]: 55
      }
    },
    {
      id: "e2",
      name: "eTown 2",
      values: {
        ["safety"]: 15,
        ["unsafety"]: 12,
        ["unknown"]: 245
      }
    },
    {
      id: "e2.G",
      name: "E2 Ground",
      values: {
        ["safety"]: 10,
        ["unsafety"]: 10,
        ["unknown"]: 200
      }
    },
    {
      id: "e2.3",
      name: "E2 3Floor",
      values: {
        ["satefy"]: 5,
        ["unsatefy"]: 2,
        ["unknown"]: 245
      }
    }
  ]
  return update(state, {
    summaryOfLocations: {
      $set: data
    },
    noOfLocation: {
      $set: data.length
    }
  })
}
