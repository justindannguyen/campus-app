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
import { TouchableOpacity } from "react-native"
import { styles } from "./styles"
import {
  View,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Label,
  Button,
  Badge,
  Text
} from "native-base"
import { PropTypes } from "prop-types"
import Icon from "react-native-vector-icons/EvilIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { constants } from "../../../global"
import { globalStyles } from "../../../global/styles/index"

export default class SummaryData extends Component {
  onValueSelected = selectedId => {
    this.props.setSelectedSummaryId(selectedId)
  }

  renderValues(summary) {
    return (
      <ListItem style={globalStyles.listViewItemSmall} key={summary.id}>
        <Left>
          <Text>{summary.name}</Text>
        </Left>
        <Body style={styles.valueWrapper}>
          <Badge style={styles.value}>
            <Text>{summary.values[constants.unsafety] || 0}</Text>
          </Badge>
          <Badge warning style={styles.value}>
            <Text>{summary.values[constants.unknown] || 0}</Text>
          </Badge>
          <Badge success style={styles.value}>
            <Text>{summary.values[constants.safety] || 0}</Text>
          </Badge>
        </Body>
        <Right>
          {
            // How to avoid this annoymous function? (how?passing parameter to callback)
          }
          <TouchableOpacity onPress={() => this.onValueSelected(summary.id)}>
            <MaterialIcons name="navigate-next" style={styles.listItemIcon} />
          </TouchableOpacity>
        </Right>
      </ListItem>
    )
  }
  render() {
    const { selectedSummary } = this.props
    const description = `  (Touch to ${this.props.fullScreen ? "collapse" : "expand"}!)`
    return (
      <View style={styles.dataContainer}>
        <Button full light onPress={this.props.onFullScreen}>
          <Icon name="location" style={styles.dataHeaderIcon} />
          <Label>{selectedSummary.name}</Label>
          <Label style={styles.dataHeaderDescription}>{description}</Label>
        </Button>
        <Content style={styles.dataContentContainer}>
          <List>
            {this.renderValues(selectedSummary)}
            {this.props.childrenSummaries.map(summary => this.renderValues(summary))}
          </List>
        </Content>
      </View>
    )
  }
}

SummaryData.propTypes = {
  childrenSummaries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      values: PropTypes.object.isRequired
    })
  ),
  selectedSummary: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    values: PropTypes.object.isRequired
  }),
  fullScreen: PropTypes.bool.isRequired,
  onFullScreen: PropTypes.func.isRequired,
  setSelectedSummaryId: PropTypes.func.isRequired
}
