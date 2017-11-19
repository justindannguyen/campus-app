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
import React from "react"
import { Actions, Scene } from "react-native-router-flux"
import Home from "./Home"

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="home" component={Home} title="Home" initial />
  </Scene>
)
export default scenes
