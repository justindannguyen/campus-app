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
import { constants, showSuccess } from "../../../global"
import { PropTypes } from "prop-types"
import {
  View,
  Container,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Text,
  Thumbnail,
  Item,
  Input,
  Header,
  Button
} from "native-base"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import EvilIcons from "react-native-vector-icons/EvilIcons"

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
        <Left style={globalStyles.listViewItemSmall}>
          <Thumbnail small source={profile} />
        </Left>
        <Body style={globalStyles.listViewItemSmall}>
          <Text>Nguyen Van Tuan</Text>
          <Text note>At etown 1</Text>
        </Body>
        <Right style={[globalStyles.listViewItemSmall, globalStyles.alignCenter]}>
          <MaterialCommunityIcons name="checkbox-blank-circle" style={[dotStyle, styles.dotIcon]} />
        </Right>
      </ListItem>
    )
  }

  sendNotification = () => showSuccess("Send notification to people...")

  render() {
    return (
      <Container>
        <Header style={styles.searchContainer}>
          <Item style={styles.searchTextContainer}>
            <EvilIcons style={styles.searchTextIcon} name="search" />
            <Input
              style={styles.searchText}
              placeholderTextColor="lightgray"
              placeholder="Search"
            />
          </Item>
          <View style={styles.headerMenu}>
            <Button style={styles.headerMenuButton} transparent onPress={this.sendNotification}>
              <EvilIcons style={styles.headerMenuIcon} name="external-link" />
            </Button>
            <Button style={styles.headerMenuButton} transparent>
              <MaterialCommunityIcons style={styles.headerMenuIcon} name="dots-vertical" />
            </Button>
          </View>
        </Header>
        <Content style={styles.listContainer}>
          <List dataArray={this.props.attendances} renderRow={this.renderAttendance} />
        </Content>
      </Container>
    )
  }
}

Detail.propTypes = {
  attendances: PropTypes.array
}

Detail.defaultProps = {
  attendances: ["1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]
}
