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
import {
  Container,
  View,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Text
} from "native-base"
import { View as AnimatedView } from "react-native-animatable"
import { globalStyles } from "../../../global/styles"
import { styles } from "./styles"
import LinearGradient from "react-native-linear-gradient"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { PropTypes } from "prop-types"
import StartFireEvacuation from "./StartFireEvacuation"

const profile = require("../../../assets/images/profile.jpeg")
const gradident = {
  start: { x: 0.75, y: 0.0 },
  end: { x: 0.45, y: 1.0 },
  colors: ["#5fd8ef", "#5fd8ef", "#24b0cb"],
  locations: [0, 0.55, 0.6]
}

export default class Setting extends Component {
  openSource = () => {
    alert("open source")
  }

  about = () => {
    alert("about")
  }

  logout = () => {
    alert("logout")
  }

  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.topContainer}>
          <LinearGradient
            start={gradident.start}
            end={gradident.end}
            locations={gradident.locations}
            colors={gradident.colors}
            style={styles.topContainerBackground}>
            <Text style={styles.profileText}>Justin Nguyen</Text>
          </LinearGradient>
          <AnimatedView style={styles.profileContainer} animation="zoomInDown" useNativeDriver>
            <Thumbnail large source={profile} style={styles.profilePicture} />
          </AnimatedView>
        </View>
        <View style={styles.bottomContainer}>
          <List button>
            <StartFireEvacuation setFireAlarm={this.props.setFireAlarm} />
            <ListItem icon onPress={this.openSource}>
              <Left>
                <MaterialCommunityIcons style={styles.menuIcon} name="library-books" />
              </Left>
              <Body style={globalStyles.noBorder}>
                <Text>Open Source Libraries</Text>
              </Body>
            </ListItem>
            <ListItem icon onPress={this.about}>
              <Left>
                <MaterialCommunityIcons style={styles.menuIcon} name="information-outline" />
              </Left>
              <Body style={globalStyles.noBorder}>
                <Text>About</Text>
              </Body>
            </ListItem>
            <ListItem icon onPress={this.logout}>
              <Left>
                <MaterialCommunityIcons style={styles.menuIcon} name="logout" />
              </Left>
              <Body style={globalStyles.noBorder}>
                <Text>Logout</Text>
              </Body>
            </ListItem>
          </List>
        </View>
      </Container>
    )
  }
}

Setting.propTypes = {
  setFireAlarm: PropTypes.func.isRequired
}
