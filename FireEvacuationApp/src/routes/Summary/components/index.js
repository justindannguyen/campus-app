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
import { LayoutAnimation } from "react-native"
import { View, Text } from "native-base"
import { styles } from "./styles"
import { PropTypes } from "prop-types"
import SummaryChart from "./SummaryChart"
import SummaryData from "./SummaryData"

export default class Summary extends Component {
  constructor() {
    super()
    this.state = { fullScreen: false }
  }
  componentDidMount = () => {
    this.props.loadSummaryData()
  }

  onFullScreen = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring)
    let fullScreen = !this.state.fullScreen
    this.setState({ ...this.state, fullScreen })
  }

  render() {
    if (this.props.selectedSummary == null) {
      return <Text>No data</Text>
    }

    if (this.state.fullScreen) {
      return (
        <View style={styles.container}>
          <SummaryData {...this.props} onFullScreen={this.onFullScreen} />
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <SummaryChart {...this.props} />
        <SummaryData {...this.props} onFullScreen={this.onFullScreen} />
      </View>
    )
  }
}

Summary.propTypes = {
  childrenSummaries: PropTypes.array,
  selectedIndex: PropTypes.number,
  selectedSummary: PropTypes.object,
  noOfLocation: PropTypes.number,
  loadSummaryData: PropTypes.func.isRequired,
  setSelectedSummaryId: PropTypes.func.isRequired,
  setSelectedIndex: PropTypes.func.isRequired
}

Summary.defaultProps = {
  childrenSummaries: []
}
