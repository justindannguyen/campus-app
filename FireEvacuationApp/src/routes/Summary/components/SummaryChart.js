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
import { Text, View, processColor } from "react-native"
import { PieChart } from "react-native-charts-wrapper"
import { styles } from "./styles"
import { PropTypes } from "prop-types"
import update from "immutability-helper"
import Swiper from "../../../global/components/Swiper"
import { SAFETY, UNSAFETY, UNKNOWN } from "./constants"

const colors = {
  safety: processColor("#C0FF8C"),
  unknown: processColor("#FFF78C"),
  unsatefy: processColor("#FF8C9D"),
  hole: processColor("#f0f0f0"),
  circle: processColor("#f0f0f088")
}

export default class SummaryChart extends Component {
  constructor() {
    super()

    this.state = {}
  }

  // https://stackoverflow.com/questions/35656375/charts-not-getting-displayed-with-react-native-chart-android
  onLayoutChanged = (width, height) => {
    this.setState({ ...this.state, width, height })
  }

  onPageChanged = index => this.props.setSelectedLocationAction(index)

  renderChart = (index, totalPage) => {
    const { selectedSummary } = this.props
    const chartData = {
      dataSets: [
        {
          values: [
            { value: selectedSummary.values[SAFETY] || 0, label: "Safety" },
            { value: selectedSummary.values[UNKNOWN] || 0, label: "Unknown" },
            { value: selectedSummary.values[UNSAFETY] || 0, label: "Unsafety" }
          ],
          label: "",
          config: {
            colors: [colors.safety, colors.unknown, colors.unsatefy],
            valueTextSize: 15,
            sliceSpace: 5,
            selectionShift: 10,
            valueFormatter: "#",
            drawValues: false
          }
        }
      ]
    }
    const accumulator = chartData.dataSets[0].values
      .map(value => value.value)
      .reduce((accumulator, value) => value + accumulator, 0)
    const centerText = accumulator > 0 ? `${accumulator}` : "No data"
    const { width, height } = this.state
    return (
      <PieChart
        style={[styles.chart, { width, height }]}
        chartDescription={{ enabled: false }}
        data={chartData}
        legend={{ enabled: true, position: "ABOVE_CHART_CENTER" }}
        rotationEnabled={false}
        drawEntryLabels={false}
        usePercentValues={false}
        centerText={{ text: `${centerText}`, textSize: 25, radiusPercent: 100 }}
        holeRadius={35}
        holeColor={colors.hole}
        transparentCircleRadius={40}
        transparentCircleColor={colors.circle}
        animation={{ durationX: 800, easingX: "EaseInOutQuad" }}
      />
    )
  }

  render() {
    return (
      <Swiper
        onLayoutChanged={this.onLayoutChanged}
        onPageChanged={this.onPageChanged}
        index={this.props.selectedIndex}
        totalPage={this.props.noOfLocation}
        containerStyle={styles.chartContainer}
        renderContent={this.renderChart}
      />
    )
  }
}

SummaryChart.propTypes = {
  selectedSummary: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    values: PropTypes.object.isRequired
  }),
  selectedIndex: PropTypes.number,
  noOfLocation: PropTypes.number,
  setSelectedLocationAction: PropTypes.func.isRequired
}
