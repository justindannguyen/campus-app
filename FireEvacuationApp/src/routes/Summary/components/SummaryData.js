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
import { View, Label } from "native-base"
import { styles } from "./styles"
import SummaryChart from "./SummaryChart"

export default class Summary extends Component {
  render() {
    return (
      <View style={styles.dataContainer}>
        <Label>Hello</Label>
      </View>
    )
  }
}
