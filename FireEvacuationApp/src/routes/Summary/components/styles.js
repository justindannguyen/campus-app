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
    flex: 3
  },
  chart: {
    ...globalStyles.flexLayout,
    marginBottom: 10
  },
  dataContainer: {
    ...globalStyles.flexLayout,
    flex: 2
  },
  dataHeaderContainer: {
    backgroundColor: globalStyles.mainColor.color
  },
  dataHeaderIcon: {
    ...globalStyles.bigMenuIcon,
    ...globalStyles.mainContrastColor
  },
  dataHeaderText: {
    ...globalStyles.mainContrastColor
  },
  dataHeaderDescription: {
    ...globalStyles.mainContrastColor,
    fontSize: 7,
    marginTop: 5
  },
  dataContentContainer: {
    ...globalStyles.listViewContainer
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
