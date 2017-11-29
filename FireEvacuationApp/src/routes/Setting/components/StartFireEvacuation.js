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

import React, { Component } from "react"
import { ListItem, Left, Body, Right, Text } from "native-base"
import { DocumentPicker, DocumentPickerUtil } from "react-native-document-picker"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { globalStyles } from "../../../global/styles"
import { showError } from "../../../global"
import { styles } from "./styles"
import { PropTypes } from "prop-types"

export default class StartFireEvacuation extends Component {
  startFireEvacuation = () => {
    DocumentPicker.show(
      {
        filetype: [DocumentPickerUtil.plainText()]
      },
      (error, response) => {
        // Does nothing when user cancel the file picker.
        if (error != null) {
          return
        }

        this.props.setFireAlarm(response)
      }
    )
  }

  render() {
    return (
      <ListItem icon onPress={this.startFireEvacuation}>
        <Left>
          <MaterialCommunityIcons style={styles.menuIcon} name="alarm-light" />
        </Left>
        <Body style={globalStyles.noBorder}>
          <Text>Start Fire Evacuation</Text>
        </Body>
      </ListItem>
    )
  }
}

StartFireEvacuation.propTypes = {
  setFireAlarm: PropTypes.func.isRequired
}
