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
  listContainer: {
    ...globalStyles.listViewContainer
  },
  searchContainer: {
    alignItems: "center",
    backgroundColor: globalStyles.mainColor.color
  },
  searchTextContainer: {
    flex: 3
  },
  searchTextIcon: {
    ...globalStyles.mediumMenuIcon,
    ...globalStyles.mainContrastColor
  },
  searchText: {
    ...globalStyles.mainContrastColor,
    height: 40
  },
  headerMenuButton: {
    width: 40
  },
  headerMenu: {
    ...globalStyles.flexRowLayoutCenter,
    justifyContent: "flex-end"
  },
  headerMenuIcon: {
    ...globalStyles.bigMenuIcon,
    ...globalStyles.mainContrastColor
  },
  dotIcon: {
    fontSize: 15
  }
}
