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
import { View, Text } from "native-base"
import { styles } from "./styles"
import { PropTypes } from "prop-types"
import SummaryChart from "./SummaryChart"
import SummaryData from "./SummaryData"

export default class Summary extends Component {
  componentDidMount = () => {
    this.props.loadSummaryData()
  }

  renderNoData() {
    return (
      <View style={styles.container}>
        <Text>No data</Text>
      </View>
    )
  }

  render() {
    if (Object.keys(this.props.summaryLocations).length === 0 || this.props.selectedIndex == null) {
      return this.renderNoData()
    }

    return (
      <View style={styles.container}>
        <SummaryChart {...this.props} />
        <SummaryData {...this.props} />
      </View>
    )
  }
}

Summary.propTypes = {
  summaryLocations: PropTypes.array,
  selectedIndex: PropTypes.number,
  loadSummaryData: PropTypes.func.isRequired,
  setSelectedLocationAction: PropTypes.func.isRequired
}

Summary.defaultProps = {
  summaryLocations: []
}
