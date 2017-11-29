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
import Setting from "../components"
import { setFireAlarm } from "../modules/SettingActions"

const mapStateToProps = state => ({})

const mapDispatchToProps = {
  setFireAlarm
}

export default connect(mapStateToProps, mapDispatchToProps)(Setting)
