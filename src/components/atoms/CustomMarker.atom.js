import React from "react";
import { View, StyleSheet } from "react-native";
import { Marker } from "react-native-maps";
import Pin from "_assets/pin.svg";
import { DEEP_BLUE, ORANGE } from "_styles/colors";

function CustomMarker(props) {
  const { coordinate, url, type } = props;

  const color = type == "destination" ? ORANGE : DEEP_BLUE;
  const size = type == "origin" ? 30 : 30;
  return (
    <Marker coordinate={coordinate}>
      <View>
        <Pin width={size} height={size} fill={color} />
      </View>
    </Marker>
  );
}

const styles = StyleSheet.create({});

export default CustomMarker;
