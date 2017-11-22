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
import { View } from "native-base"
import { styles } from "./styles"
import SummaryChart from "./SummaryChart"
import SummaryData from "./SummaryData"

export default class Summary extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SummaryChart />
        <SummaryData />
      </View>
    )
  }
}
