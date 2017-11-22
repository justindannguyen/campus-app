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
import { PropTypes } from "prop-types"
import { Text, View, ScrollView, ViewPagerAndroid } from "react-native"
import { styles } from "./SwiperStyles"
import SwiperButtons from "./SwiperButtons"

export default class Swiper extends Component {
  constructor() {
    super()

    this.state = { index: 0 }
  }

  onLayout = event => {
    const { width, height } = event.nativeEvent.layout
    this.setState({ ...this.state, width, height })

    this.props.onLayoutChanged && this.props.onLayoutChanged(width, height)
  }

  next = () => {
    let index = this.props.index != null ? this.props.index : this.state.index
    if (index >= this.props.totalPage - 1) {
      return
    }
    index++
    this.setState({ ...this.state, index })
    this.props.onPageChanged && this.props.onPageChanged(index)
  }

  back = () => {
    let index = this.props.index != null ? this.props.index : this.state.index
    if (index <= 0) {
      return
    }
    index--
    this.setState({ ...this.state, index })
    this.props.onPageChanged && this.props.onPageChanged(index)
  }

  renderButtons = index => {
    const { width, height } = this.state
    return (
      <SwiperButtons
        buttonWrapperStyle={{ width, height }}
        index={index}
        totalPage={this.props.totalPage}
        next={this.next}
        back={this.back}
      />
    )
  }

  renderContent(index) {
    const contentComponent = this.props.renderContent(index, this.props.totalPage)
    const props = contentComponent.props
    if (props.title == null) {
      return contentComponent
    }
    return (
      <View>
        <Text style={[styles.titleText, this.props.titleStyle]}>{props.title}</Text>
        {contentComponent}
      </View>
    )
  }

  render() {
    const index = this.props.index != null ? this.props.index : this.state.index
    return (
      <View style={[styles.container, this.props.containerStyle]} onLayout={this.onLayout}>
        {this.renderContent(index)}
        {this.props.renderButtons
          ? this.props.renderButtons(index, this.props.totalPage, this.next, this.back)
          : this.renderButtons(index)}
      </View>
    )
  }
}

Swiper.propTypes = {
  totalPage: PropTypes.number.isRequired,
  index: PropTypes.number,

  renderButtons: PropTypes.func,
  renderContent: PropTypes.func.isRequired,
  onLayoutChanged: PropTypes.func,
  onPageChanged: PropTypes.func,

  containerStyle: PropTypes.object,
  titleStyle: PropTypes.object
}
