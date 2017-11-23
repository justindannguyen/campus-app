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
    alignItems: "center"
  },
  searchTextContainer: {
    flex: 3
  },
  searchTextIcon: {
    ...globalStyles.mediumMenuIcon,
    color: "white"
  },
  searchText: {
    color: "white",
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
    color: "white"
  },
  dotIcon: {
    fontSize: 15
  }
}
