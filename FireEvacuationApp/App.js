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

import React, { Component } from "react"
import { UIManager, Platform } from "react-native"
import { Root } from "native-base"
import AppRoot from "./src"
import { globalStyles } from "./src/global/styles"

export default class App extends Component {
  constructor() {
    super()
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
  }

  render() {
    return (
      <Root style={globalStyles.flexLayout}>
        <AppRoot {...this.props} />
      </Root>
    )
  }
}
