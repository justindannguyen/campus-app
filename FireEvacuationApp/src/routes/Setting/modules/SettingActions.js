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

import { urls } from "../../../global/urls"
import { handleError } from "../../../global"
import { receiveSummaryDataAction } from "../../Summary/modules/SummaryActions"
import { Actions } from "react-native-router-flux"

export const RECEIVE_FIRE_ALARM_SUMMARY = "RECEIVE_FIRE_ALARM_SUMMARY"

export function receiveFireAlarmAction(summary) {
  return {
    type: RECEIVE_FIRE_ALARM_SUMMARY,
    payload: summary
  }
}

export function setFireAlarm(alarmStatus) {
  return dispatch => {
    alarmStatus.fileName ? dispatch(startFireAlarm(alarmStatus)) : dispatch(stopFireAlarm())
  }

  function stopFireAlarm() {
    return dispatch => {
      console.log("stop file alarm.")
    }
  }

  function startFireAlarm(attendanceFile) {
    return dispatch => {
      const formData = new FormData()
      formData.append("file", {
        uri: attendanceFile.uri,
        type: attendanceFile.type,
        name: attendanceFile.fileName
      })
      fetch(urls.setFireAlarm, { method: "POST", body: formData })
        .then(response => response.json())
        .then(alarmSummaries => {
          dispatch(receiveSummaryDataAction(alarmSummaries))
          Actions.tabSummary() // Navigate to summary tab
        })
        .catch(errror => {
          error.userMessage = "Could not start the fire alarm due to problem on server"
          handleError(error)
        })
    }
  }
}
