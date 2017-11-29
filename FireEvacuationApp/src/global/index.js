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

import { Toast } from "native-base"

export const constants = {
  safety: "safety",
  unsafety: "unsafety",
  unknown: "unknown"
}

function showToast(configs = {}) {
  configs.duration = 4
  configs.buttonText = "Got it!"
  Toast.show(configs)
}

export function handleError(error) {
  // TODO add the detail implementation.
  console.log(error)

  showError(error.userMessage || error.message || error.toString())
}

/**
 * Show a success toast from given message.
 *
 * @param {string} message
 */
export function showSuccess(message) {
  showToast({ type: "success", text: message })
}

/**
 * Show a warning toast from given message.
 *
 * @param {string} message
 */
export function showWarning(message) {
  showToast({ type: "warning", text: message })
}

/**
 * Show a danger toast from given message.
 *
 * @param {string} message
 */
export function showError(message) {
  showToast({ type: "danger", text: message })
}
