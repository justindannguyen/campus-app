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
import { styles } from "./styles"
import { View, Label, Button } from "native-base"
import SummaryChart from "./SummaryChart"
import { PropTypes } from "prop-types"

export default class SummaryData extends Component {
  render() {
    const selectedSumary = this.props.summaryLocations[this.props.selectedIndex]
    return (
      <View style={styles.dataContainer}>
        <Label style={styles.dataHeader}>{JSON.stringify(selectedSumary)}</Label>
        <View style={{ flex: 3 }}>
          <Label>{JSON.stringify(selectedSumary.values)}</Label>
        </View>
      </View>
    )
  }
}

SummaryData.propTypes = {
  summaryLocations: PropTypes.array,
  selectedIndex: PropTypes.number
}
