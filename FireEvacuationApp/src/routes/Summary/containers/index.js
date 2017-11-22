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

import { connect } from "react-redux"
import Summary from "../components"
import { loadSummaryData, setSelectedLocationAction } from "../modules/SummaryActions"

const mapStateToProps = ({ summary }) => ({
  childrenSummaries: summary.summaryOfLocations,
  selectedIndex: summary.selectedIndex,
  selectedSummary: summary.selectedSummary,
  noOfLocation: summary.noOfLocation
})

const mapDispatchToProps = {
  loadSummaryData,
  setSelectedLocationAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary)
