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

export default class SummaryChart extends Component {
  constructor() {
    super()

    this.state = {
      legend: {
        enabled: true,
        textSize: 8,
        form: "CIRCLE",
        position: "RIGHT_OF_CHART",
        wordWrapEnabled: true
      },
      data: {
        dataSets: [
          {
            values: [
              { value: 40, label: "Sandwiches" },
              { value: 21, label: "Salads" },
              { value: 15, label: "Soup" },
              { value: 9, label: "Beverages" },
              { value: 15, label: "Desserts" }
            ],
            label: "Pie dataset",
            config: {
              colors: [
                processColor("#C0FF8C"),
                processColor("#FFF78C"),
                processColor("#FFD08C"),
                processColor("#8CEAFF"),
                processColor("#FF8C9D")
              ],
              valueTextSize: 20,
              valueTextColor: processColor("green"),
              sliceSpace: 5,
              selectionShift: 13
            }
          }
        ]
      },
      description: {
        enabled: false,
        text: "This is Pie chart description",
        textSize: 15,
        textColor: processColor("darkgray")
      }
    }
  }

  render() {
    const disabled = { enabled: false }
    return (
      <PieChart
        style={styles.chartContainer}
        chartBackgroundColor={processColor("gray")}
        chartDescription={disabled}
        data={this.state.data}
        legend={disabled}
        entryLabelColor={processColor("black")}
        rotationEnabled={true}
        drawEntryLabels={true}
        usePercentValues={false}
        centerText={{ text: "1110", textSize: 25, radiusPercent: 100 }}
        holeRadius={30}
        holeColor={processColor("#f0f0f0")}
        transparentCircleRadius={35}
        transparentCircleColor={processColor("#f0f0f088")}
        animation={{ durationX: 800, easingX: "EaseInOutQuad" }}
      />
    )
  }
}
