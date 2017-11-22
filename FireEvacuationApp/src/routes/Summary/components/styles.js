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

import { globalStyles } from "../../../global/styles"

export const styles = {
  container: {
    ...globalStyles.flexLayout
  },
  chartContainer: {
    ...globalStyles.flexLayoutCenter,
    flex: 2
  },
  chart: {
    ...globalStyles.flexLayout,
    marginBottom: 10
  },
  dataContainer: {
    ...globalStyles.flexLayout
  },
  dataHeaderIcon: {
    ...globalStyles.bigMenuIcon
  },
  dataHeaderDescription: {
    fontSize: 7,
    marginTop: 5
  },
  dataContentContainer: {
    ...globalStyles.flexLayout,
    backgroundColor: "white"
  },
  valueWrapper: {
    ...globalStyles.flexRowLayoutCenter,
    justifyContent: "flex-end"
  },
  value: {
    width: 50
  },
  listItemIcon: {
    fontSize: 30
  }
}
