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
import { TouchableOpacity, View, Text } from "react-native"
import { styles } from "./SwiperStyles"
import { PropTypes } from "prop-types"
import Icon from "react-native-vector-icons/dist/MaterialIcons"

export default class SwiperButtons extends Component {
  renderNextButton = () => {
    if (this.props.index >= this.props.totalPage - 1 || this.props.totalPage == 0) {
      return <View />
    }

    return (
      <TouchableOpacity onPress={this.props.next}>
        <Icon name="navigate-next" style={styles.buttonIcon} />
      </TouchableOpacity>
    )
  }

  renderPrevButton = () => {
    if (this.props.index <= 0 || this.props.totalPage == 0) {
      return <View />
    }

    return (
      <TouchableOpacity onPress={this.props.back}>
        <Icon name="navigate-before" style={styles.buttonIcon} />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View pointerEvents="box-none" style={[styles.buttonWrapper, this.props.buttonWrapperStyle]}>
        {this.renderPrevButton()}
        {this.renderNextButton()}
      </View>
    )
  }
}

SwiperButtons.propTypes = {
  next: PropTypes.func.isRequired,
  back: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  totalPage: PropTypes.number.isRequired,

  buttonWrapperStyle: PropTypes.object
}
