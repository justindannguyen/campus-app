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
import { styles } from "./styles"
import { globalStyles } from "../../../global/styles"
import { constants } from "../../../global"
import { PropTypes } from "prop-types"
import { Content, List, ListItem, Left, Body, Right, Text, Thumbnail } from "native-base"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

const profile = require("../../../assets/images/profile.jpeg")

export default class Detail extends Component {
  renderAttendance = attendance => {
    const status = attendance.status
    const dotStyle =
      status === constants.safety
        ? globalStyles.safety
        : status === constants.unsafety ? globalStyles.unsafety : globalStyles.unknown
    return (
      <ListItem key={attendance} avatar>
        <Left>
          <Thumbnail source={profile} />
        </Left>
        <Body>
          <Text>Nguyen Van Tuan</Text>
          <Text note>At etown 1</Text>
        </Body>
        <Right>
          <Icon name="checkbox-blank-circle" style={[dotStyle, styles.dotIcon]} />
        </Right>
      </ListItem>
    )
  }
  render() {
    return (
      <Content style={styles.container}>
        <List dataArray={this.props.attendances} renderRow={this.renderAttendance} />
      </Content>
    )
  }
}

Detail.propTypes = {
  attendances: PropTypes.array
}

Detail.defaultProps = {
  attendances: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]
}
