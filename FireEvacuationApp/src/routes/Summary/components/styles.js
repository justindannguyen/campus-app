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
    ...globalStyles.flexLayout,
    backgroundColor: "gray"
  },
  dataHeader: {
    ...globalStyles.flexLayout
  }
}
