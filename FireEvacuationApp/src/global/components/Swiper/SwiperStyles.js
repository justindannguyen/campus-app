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

import { globalStyles } from "../../styles"

export const styles = {
  container: {
    backgroundColor: "transparent",
    position: "relative",
    flex: 1
  },
  buttonWrapper: {
    ...globalStyles.flexRowLayoutCenter,
    alignItems: "flex-end",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    paddingHorizontal: 10,
    position: "absolute",
    top: 0,
    left: 0
  },
  titleText: {
    ...globalStyles.flexLayoutCenter,
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 10,
    fontWeight: "bold",
    color: "#007aff"
  },
  buttonIcon: {
    fontSize: 40,
    color: "#007aff"
  }
}
