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

// Error if we do not import react, why????
import React, { Component } from "react"
import { Actions, Scene, Tabs, Stack } from "react-native-router-flux"
import Icon from "react-native-vector-icons/dist/MaterialCommunityIcons"
import { globalStyles } from "../global/styles"
import Summary from "./Summary"
import Detail from "./Detail"
import Setting from "./Setting"

var TabIcon = props => {
  const style = props.focused ? globalStyles.bigMenuIcon_Active : globalStyles.bigMenuIcon_Inactive
  return <Icon style={style} name={props.iconName} />
}
const scenes = Actions.create(
  <Tabs
    key="root"
    tabBarPosition="bottom"
    showLabel={false}
    hideNavBar
    swipeEnabled
    lazy
    animationEnabled>
    <Stack key="tabSummary" initial icon={TabIcon} iconName="chart-pie">
      <Scene key="summary" hideNavBar component={Summary} title="Summary" />
    </Stack>
    <Stack key="tabDetail" icon={TabIcon} iconName="face-profile">
      <Scene key="details" hideNavBar component={Detail} title="Details" />
    </Stack>
    <Stack key="tabSetting" icon={TabIcon} iconName="settings">
      <Scene key="settings" hideNavBar component={Setting} title="Settings" />
    </Stack>
  </Tabs>
)
export default scenes
