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
import { StyleSheet } from "react-native"

export const styles = {
  container: {
    ...globalStyles.flexLayout
  },
  topContainer: {
    ...globalStyles.flexLayout,
    flex: 2
  },
  profileText: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent"
  },
  profileContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center"
  },
  profilePicture: {
    borderColor: "#12ddfe",
    borderWidth: 2
  },
  bottomContainer: {
    ...globalStyles.flexLayout,
    flex: 3,
    backgroundColor: "white",
    paddingTop: 10
  },
  topContainerBackground: {
    flex: 1
  },
  menuIcon: {
    fontSize: 35,
    ...globalStyles.mainColor
  }
}
